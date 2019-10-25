import React from 'react';
import FontAwesomeIcon from '../FontAwesomeIcon';

import swonderInfo from 'Src/swonderInfo.json';

import './Footer.scss';

export default () => {
    const info = swonderInfo.footerInfo;
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
                    <FontAwesomeIcon name="envelope" />
                </a>
                <a className="Link" href={info.facebook} target="_blank" rel="noreferrer noopener">
                    <FontAwesomeIcon name="facebook-square" />
                </a>
                <a className="Link" href={info.twitter} target="_blank" rel="noreferrer noopener">
                    <FontAwesomeIcon name="twitter-square" />
                </a>
            </span>
        </div>
    );
};
