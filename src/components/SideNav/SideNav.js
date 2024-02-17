import './SideNav.scss';

import { NavLink } from "react-router-dom";

function SideNav({ bookTitle }) {
    return (
        <section className='side-nav'>
            <h1>{bookTitle}</h1>
            <NavLink to='info' className={({ isActive }) => isActive ? 'side-nav__link side-nav__link--active' : 'side-nav__link'}>
                Book Information
            </NavLink>
            <NavLink to='other' className={({ isActive }) => isActive ? 'side-nav__link side-nav__link--active' : 'side-nav__link'}>
                Other
            </NavLink>
        </section>
    )
}

export default SideNav;
