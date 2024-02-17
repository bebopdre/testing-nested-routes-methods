import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <section className="nav-bar">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/first'>First</NavLink>
            <NavLink to='/second'>Second</NavLink>
            <NavLink to='/third'>Third</NavLink>
        </section>
    )
}

export default NavBar;
