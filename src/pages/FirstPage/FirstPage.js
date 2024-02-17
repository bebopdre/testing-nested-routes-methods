import './FirstPage.scss';

import bin from '../../assets/delete-green.png';

import { NavLink, Outlet, useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from 'react';
import DeleteModal from '../../components/DeleteModal/DeleteModal';

function FirstPage() {

    const navigate = useNavigate();

    const { bookID } = useParams();
    const [curBook, setCurBook] = useState({});

    const [showDeleteModal, setShowDeleteModal] = useState(false);

    useEffect(() => {
        const getBook = async () => {
            try {
                const response = await axios.get(`http://localhost:5050/books/${bookID}`);
                setCurBook(response.data);
            }
            catch (err) {
                console.log(`error getting specific book. this is the error: ${err}`);
            }
        }
        getBook();
    }, [bookID]);

    function handleDelete() {

        const deleteBook = async () => {
            try {
                await axios.delete(`http://localhost:5050/books/${curBook.id}`);
            }
            catch (err) {
                console.log(`error deleting book. this is the error: ${err}`);
            }
        }
        deleteBook();
        navigate('/')
    }


    return (
        <section className="first">
            {
                showDeleteModal &&
                <DeleteModal setShowDeleteModal={setShowDeleteModal} handleDelete={handleDelete} />
            }
            <div className='first__top'>
                <h1 className='first__top-heading'>
                    {curBook.title}
                </h1>
                <img onClick={() => setShowDeleteModal(true)} src={bin} className='first__top-icon' alt='green garbage can'></img>
            </div>

            <div className='first__links'>
                <NavLink
                    to='info'
                    state={{ book: curBook }}
                    className={({ isActive }) => isActive ? 'first__links-link first__links-link--active' : 'first__links-link'}
                >
                    Book Information
                </NavLink>
                <NavLink
                    to='other'
                    state={{ book: curBook }}
                    className={({ isActive }) => isActive ? 'first__links-link first__links-link--active' : 'first__links-link'}
                >
                    Edit Book Information
                </NavLink>

            </div>

            <Outlet />
        </section>
    )
}

export default FirstPage;
