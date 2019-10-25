import React from 'react';

import './FontAwesomeIcon.scss';

export default ({ name }) => (
    <span className={`FontAwesomeIcon fa fa-${name}`}/>
);
