import React from 'react';

import './Footer.scss';

const Footer = ({ info }) => {
    return (
        <div className="Footer">
            <span className="Info">
               Phone: {info.phone}
            </span>
            <span className="Info">
                Address: {info.address}
            </span>
            <span className="Info">
                Fax: {info.fax}
            </span>
            <span className="Info">
                <a className="Link" href={`mailto:${info.email}`} rel="noreferrer noopener">
                    <span className="Icon fa fa-envelope" />
                </a>
                <a className="Link" href={info.facebook} target="_blank" rel="noreferrer noopener">
                    <span className="Icon fa fa-facebook-square" />
                </a>
                <a className="Link" href={info.twitter} target="_blank" rel="noreferrer noopener">
                    <span className="Icon fa fa-twitter-square" />
                </a>
            </span>
        </div>
    );
};

export default Footer;