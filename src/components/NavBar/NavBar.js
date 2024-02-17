import './NavBar.scss';

import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <section className="nav-bar">
            <NavLink to='/' className='nav-bar__link'>Home</NavLink>
            <NavLink to='/first' className='nav-bar__link'>First</NavLink>
            <NavLink to='/second' className='nav-bar__link'>Second</NavLink>
            <NavLink to='/third' className='nav-bar__link'>Third</NavLink>
        </section>
    )
}

export default NavBar;
