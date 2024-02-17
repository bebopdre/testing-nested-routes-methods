import './FirstPage.scss';

import bin from '../../assets/delete-green.png';

import { NavLink, Outlet, useParams } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from 'react';

function FirstPage() {

    const { bookID } = useParams();
    const [curBook, setCurBook] = useState({});

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
    }, [bookID])


    return (
        <section className="first">
            <div className='first__top'>
                <h1 className='first__top-heading'>
                    {curBook.title}
                </h1>
                <img src={bin} className='first__top-icon' alt='green garbage can'></img>
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
