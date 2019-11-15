import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

import './Layout.scss';

export default ({ children }) => (
    <div className="Layout">
        <Header />
        <div className="Container">
            <div className="Content">{children}</div>
        </div>
        <Footer />
    </div>
);
