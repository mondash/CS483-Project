import React from 'react';
import { Link } from "react-router-dom";

import './Navbar.scss';

export default () => {
    const mapSrc = "https://www.google.com/maps?q=swonder+ice+rink&um=1&ie=UTF-8&sa=X&ved=0ahUKEwiP_KaErq7lAhXYvJ4KHdODD5gQ_AUIEigB";

    return (
        <nav className="Navbar">
            <Link to="/"><img className="Logo" src="/favicon.ico" alt="Logo"/></Link>
            <Link className="Nav" to="/sessions">Skating Sessions</Link>
            <Link className="Nav" to="/fitness">Fitness Center</Link>
            <Link className="Nav" to="/reservation">Reservations</Link>
            <Link className="Nav" to="/organizations">Organizations</Link>
            <a className="Nav" target="_blank" rel="noopener noreferrer" href={mapSrc}>Directions</a>
        </nav>
    );
};
