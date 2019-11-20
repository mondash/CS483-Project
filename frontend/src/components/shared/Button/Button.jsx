import React from 'react';

import { FontAwesomeIcon } from 'Shared';

import './Button.scss';

export default ({ name, icon, action, isEnabled = true }) => {
    return (
        <span className="Button" onClick={isEnabled ? action : null}>
            {icon && <FontAwesomeIcon name={icon} />}
            {name}
        </span>
    );
};
