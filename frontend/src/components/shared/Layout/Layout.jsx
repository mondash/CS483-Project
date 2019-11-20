import React from 'react';

import { Header, Footer } from 'Shared';

import './Layout.scss';

export default ({ children }) => (
    <div className="Layout">
        <Header />
        <div className="Body">
            <div className="Content">{children}</div>
        </div>
        <Footer />
    </div>
);
