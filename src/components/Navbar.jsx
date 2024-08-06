import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/navbar.css';
import image1 from '../assets/LOGO final 123_processed.jpg'; // Import the logo image

export default function Navbar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const path = useLocation().pathname;
    const navigate = useNavigate();

    return (
        <>
            {/* Nav Bar Start */}
            <div className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid">
                    <img src={image1} alt="Logo" className="navbar-logo" />
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav ml-auto">
                            <Link to="/" className={`nav-item nav-link ${path === '/' ? "active" : ""}`}>Home</Link>
                            <Link to="/about" className={`nav-item nav-link ${path === '/about' ? "active" : ""}`}>About</Link>
                            <Link to="/gallery" className={`nav-item nav-link ${path === '/gallery' ? "active" : ""}`}>Gallery</Link>
                            <Link to="/events" className={`nav-item nav-link ${path === '/events' ? "active" : ""}`}>Events</Link>
                            <Link to="/trustees" className={`nav-item nav-link ${path === '/trustees' ? "active" : ""}`}>Trustees</Link>
                            <Link to="/contact" className={`nav-item nav-link ${path === '/contact' ? "active" : ""}`}>Contact</Link>
                        </div>
                        <Link to="/DonateUs" className="btn-secondary m-3">Donate Now</Link>
                        <Link to="/joinnow" className="btn-secondary m-3">Join Now</Link>
                        <Link to="/SignUp" className="btn-secondary m-3">Sign Up</Link>
                        <Link to="/AdminLogin" className="btn-secondary m-3"><i className="fa fa-user" aria-hidden="true"></i></Link>
                    </div>
                </div>
            </div>
            {/* Nav Bar End */}
        </>
    );
}
