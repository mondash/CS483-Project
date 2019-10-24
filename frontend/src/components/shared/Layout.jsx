import React from 'react';
import Header from './header/Header';
import Footer from './Footer';

import './Layout.css';

const footerInfo = {
    phone: "(123) 456-7890",
    fax: "(098) 765-4321",
    address: "1234 Road Rd City, ST 12345",
    email: "email@address.com",
    facebook: "facebook.com",
    twitter: "twitter.com",
};

const Layout = (props) => (
    <div className="Layout">
        <Header />
        <div className="Content">
            {props.children}
        </div>
        <Footer info={footerInfo} />
    </div>
);

export default Layout;