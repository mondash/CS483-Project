import React from 'react';
import Navbar from './Navbar';

const Layout = (props) => (
    <div className="Layout">
        <Navbar />
        {props.children}
    </div>
);

export default Layout;