import "./FourthPage.scss";

import bin from "../../assets/delete-green.png";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ThirdBookInfo from "../../components/ThirdBookInfo/ThirdBookInfo";
import ThirdOther from "../../components/ThirdOther/ThirdOther";

import axios from "axios";
import { useBook } from "../../contexts/bookContext";

function FourthPage() {
    const { bookID } = useParams();

    const { curBook, setBookID } = useBook(); // Use the context to access curBook and setBookID

    // Use effect to set the bookID in the context when the component mounts or bookID changes
    useEffect(() => {
        setBookID(bookID);
    }, [bookID, setBookID]);

    const [showBookInfo, setShowBookInfo] = useState(true);
    const [showOther, setShowOther] = useState(false);

    function handleTabClick(tab) {
        switch (tab) {
            case "bookInfo":
                setShowBookInfo(true);
                setShowOther(false);
                break;
            case "other":
                setShowBookInfo(false);
                setShowOther(true);
                break;
            default:
                break;
        }
    }

    return (
        <section className="fourth">
            <div className="fourth__top">
                <h1 className="fourth__top-heading">{curBook.title}</h1>
                <img
                    src={bin}
                    className="fourth__top-icon"
                    alt="green garbage can"
                ></img>
            </div>

            <div className="fourth__links">
                <div
                    onClick={() => handleTabClick("bookInfo")}
                    className={
                        showBookInfo
                            ? "fourth__links-link fourth__links-link--active"
                            : "fourth__links-link"
                    }
                >
                    Book Information
                </div>
                <div
                    onClick={() => handleTabClick("other")}
                    className={
                        showOther
                            ? "fourth__links-link fourth__links-link--active"
                            : "fourth__links-link"
                    }
                >
                    Edit Book Information
                </div>
            </div>
            {showBookInfo && <ThirdBookInfo book={curBook} />}
            {showOther && <ThirdOther book={curBook} />}
        </section>
    );
}

export default FourthPage;
