import './ThirdPage.scss';

import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import ThirdBookInfo from '../../components/ThirdBookInfo/ThirdBookInfo';
import ThirdOther from '../../components/ThirdOther/ThirdOther';

import axios from 'axios';

function ThirdPage() {
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
    }, [bookID]);

    const [showBookInfo, setShowBookInfo] = useState(true);
    const [showOther, setShowOther] = useState(false);


    function handleTabClick(tab) {

        switch (tab) {
            case 'bookInfo':
                setShowBookInfo(true);
                setShowOther(false);
                break;
            case 'other':
                setShowBookInfo(false);
                setShowOther(true);
                break;
            default:
                break;
        }
    }

    return (
        <section className="third">
            <h1 className="third__heading">
                {curBook.title}
            </h1>

            <div className="third__links">
                <div
                    onClick={() => handleTabClick('bookInfo')}
                    className={showBookInfo ? 'third__links-link third__links-link--active' : 'third__links-link'}
                >
                    Book Information
                </div>
                <div
                    onClick={() => handleTabClick('other')}
                    className={showOther ? 'third__links-link third__links-link--active' : 'third__links-link'}
                >
                    Edit Book Information
                </div>
            </div>
            {
                showBookInfo &&
                <ThirdBookInfo book={curBook} />
            }
            {
                showOther &&
                <ThirdOther book={curBook} />
            }
        </section>
    )
}

export default ThirdPage;
