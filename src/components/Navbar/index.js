import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/styleNavbar.css';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar sticky-top">
                <Link to="/">
                    <span className="navbar-brand mb-0 h1">Best Cinema</span>
                </Link>
                <div>
                    <button className="btn btn-dark">Login</button>
                </div>
            </nav>
            <p></p>
        </div>
    );
};

export default Navbar;