import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

import Navbar from './Navbar';

const Header = () => { 
    return (
        <div className="Header">
            <Link className="Nav" to = "/" ><img src="/favicon.ico" alt="Logo"/></Link>
            <Navbar />
        </div>
    );
};

export default Header;