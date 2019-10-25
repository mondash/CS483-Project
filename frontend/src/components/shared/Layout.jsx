import React from 'react';
import Header from './header/Header';
import Footer from './Footer';

import './Layout.scss';

const footerInfo = {
    phone: "(123) 456-7890",
    fax: "(098) 765-4321",
    address: "1234 Road Rd City, ST 12345",
    email: "dcrook@evansville.in.gov",
    facebook: "https://www.facebook.com/swondericearena/",
    twitter: "https://twitter.com/evv_parksandrec",
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