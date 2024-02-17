import './ThirdPage.scss';

import { Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import ThirdBookInfo from '../../components/ThirdBookInfo/ThirdBookInfo';
import ThirdOther from '../../components/ThirdOther/ThirdOther';

function ThirdPage() {
    const location = useLocation();

    const curBook = location.state.book;

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
