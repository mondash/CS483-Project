import React from 'react';
import Navbar from './Navbar';
import './Layout.css';

const Layout = (props) => (
    <div className="Layout">
        <Navbar />
        <div className="Content">
            {props.children}
        </div>
    </div>
);

export default Layout;