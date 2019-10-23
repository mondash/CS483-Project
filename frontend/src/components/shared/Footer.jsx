import React from 'react';

import './Footer.scss';

const Footer = ({ info }) => {
    return (
        <div className="Footer">
            <span>
               Phone: {info.phone}
            </span>
            <span>
                Address: {info.address}
            </span>
            <span>
                Fax: {info.fax}
            </span>
            <span>
                <a href={`mailto:${info.email}`} rel="noreferrer noopener">
                    <img src="/envelope.png" alt="Email" />
                </a>
            </span>
            <span>
                <a href={info.facebook} target="_blank" rel="noreferrer noopener">
                    <img src="/facebook.png" alt="Facebook" />
                </a>
            </span>
            <span>
                <a href={info.twitter} target="_blank" rel="noreferrer noopener">
                    <img src="/twitter.png" alt="Twitter" />
                </a>
            </span>
        </div>
    );
};

export default Footer;