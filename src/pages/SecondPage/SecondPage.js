import './SecondPage.scss';

import { NavLink, Outlet, useLocation } from "react-router-dom";

function SecondPage() {
    const location = useLocation();

    const curBook = location.state.book;

    return (
        <section className="second">
            <h1 className="second__heading">
                {curBook.title}
            </h1>

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
