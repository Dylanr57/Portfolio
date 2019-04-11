import React from "react";
import {Link} from "react-router-dom";

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <span className="navbar-brand md-0 h1">
            <p id="headerName">
            Dylan Reeves
            </p>
            <p id="headerTitle">
            Full Stack Web Developer
            </p>
            </span>
            <div className="navbar-expand ml-auto" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
                        Home
                    </Link>
                    <Link to="/AboutMe" className={window.location.pathname === "/AboutMe" ? "nav-link active" : "nav-link"}>
                        About Me
                    </Link>
                    <Link to="/Resume" className={window.location.pathname === "/Resume" ? "nav-link active" : "nav-link"}>
                        Resume
                    </Link>
                    <Link to="/Portfolio" className={window.location.pathname === "/Portfolio" ? "nav-link active" : "nav-link"}>
                        Portfolio
                    </Link>
                    <Link to="/Contact" className={window.location.pathname === "/Contact" ? "nav-link active" : "nav-link"}>
                        Contact
                    </Link>
                </ul>
            </div>
            </nav>
        </div>
    );
}

export default Header;