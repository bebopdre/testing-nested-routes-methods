import './SecondPage.scss';

import bin from '../../assets/delete-green.png';

import { NavLink, Outlet, useLocation } from "react-router-dom";

function SecondPage() {
    const location = useLocation();

    const curBook = location.state.book;

    return (
        <section className="second">
            <div className='second__top'>
                <h1 className='second__top-heading'>
                    {curBook.title}
                </h1>
                <img src={bin} className='second__top-icon' alt='green garbage can'></img>
            </div>

            <div className="second__links">
                <NavLink
                    to='info'
                    state={{ book: curBook }}
                    className={({ isActive }) => isActive ? 'second__links-link second__links-link--active' : 'second__links-link'}
                >
                    Book Information
                </NavLink>
                <NavLink
                    to='other'
                    state={{ book: curBook }}
                    className={({ isActive }) => isActive ? 'second__links-link second__links-link--active' : 'second__links-link'}
                >
                    Edit Book Information
                </NavLink>
            </div>
            <Outlet />
        </section>
    )
}

export default SecondPage;
