import React from 'react';
import { Link } from 'react-router-dom';
import swonderInfo from 'Src/swonderInfo.json';
import './Navbar.scss';

export default () => {
    return (
        <nav className="Navbar">
            <Link to="/">
                <img className="Logo" src="/favicon.ico" alt="Logo" />
            </Link>
            <div className="Container">
                <Link className="Nav" to="/sessions">
                    Skating Sessions
                </Link>
                <Link className="Nav" to="/fitness">
                    Fitness Center
                </Link>
                <Link className="Nav" to="/reservation">
                    Reservations
                </Link>
                <Link className="Nav" to="/organizations">
                    Organizations
                </Link>
                <a
                    className="Nav"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={swonderInfo.headerInfo.directionsURL}
                >
                    Directions
                </a>
                <Link className="Nav" to="/login">
                    Log in / Sign Up
                </Link>
            </div>
        </nav>
    );
};
