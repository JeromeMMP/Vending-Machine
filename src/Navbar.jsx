import React from "react";
import  {Link} from "react-router-dom"

const Navbar = () => {
    return(
        <nav className="Navbar">
            <Link to="/">Home</Link>
            <Link to="/Drinks">Drinks</Link>
            <Link to="/Snacks">Snacks</Link>
        </nav>
    );
}

export default Navbar
