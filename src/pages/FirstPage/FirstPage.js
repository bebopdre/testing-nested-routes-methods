import './FirstPage.scss';

import { NavLink, Outlet, useParams } from "react-router-dom";
// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

function FirstPage() {
    // const [showBookInfo, setShowBookInfo] = useState(true);
    // const [showOther, setShowOther] = useState(false);

    // const navigate = useNavigate();

    // useEffect(() => {
    //     navigate('info', { state: 'andrea' });
    // }, [])

    const { bookID } = useParams();

    const books = [
        {
            id: 1,
            title: 'The Martian',
            author: 'Andy Weir',
            description: 'A man gets left behind by his crew on mars. Will the scientists on earth risk everything to bring him home?',
            pageNum: 416,
            isMovie: true
        },
        {
            id: 2,
            title: 'Project Hail Mary',
            author: 'Andy Weir',
            description: 'The sun is failing, aliens are real and Ryland is stuck on a ship in the middle of another solar system. What happens next?',
            pageNum: 496,
            isMovie: false
        },
        {
            id: 3,
            title: 'All Good People Here',
            author: 'Ashley Flowers',
            description: 'In a small town in Indiana, everyone knows everyones business. So why arent people questioning a string of murders happening right on their doorstep?',
            pageNum: 336,
            isMovie: false
        }
    ];

    const curBook = books.find(book => (book.id).toString() === bookID);

    // function handleTabClick(tab) {

    //     switch (tab) {
    //         case 'bookInfo':
    //             setShowBookInfo(true);
    //             setShowOther(false);
    //             navigate('info', { state: 'andrea' })
    //             break;
    //         case 'other':
    //             setShowBookInfo(false);
    //             setShowOther(true);
    //             navigate('other', { state: 'andrea' });
    //             break;
    //         default:
    //             break;
    //     }
    // }

    return (
        <section className="first">
            <h1 className='first__heading'>
                {curBook.title}
            </h1>

            <div className='first__links'>
                <NavLink
                    to='info'
                    state={{ name: 'andrea' }}
                    className={({ isActive }) => isActive ? 'first__links-link first__links-link--active' : 'first__links-link'}
                >
                    Book Information
                </NavLink>
                <NavLink
                    to='other'
                    className={({ isActive }) => isActive ? 'first__links-link first__links-link--active' : 'first__links-link'}
                >
                    Other
                </NavLink>
                {/* <div
                    onClick={() => handleTabClick('bookInfo')}
                    className={showBookInfo ? 'first__links-link first__links-link--active' : 'first__links-link'}
                >
                    Book Information
                </div>
                <div
                    onClick={() => handleTabClick('other')}
                    className={showOther ? 'first__links-link first__links-link--active' : 'first__links-link'}
                >
                    Other
                </div> */}
            </div>

            <Outlet />
        </section>
    )
}

export default FirstPage;
