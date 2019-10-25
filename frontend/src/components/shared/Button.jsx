import React from 'react';
import './Button.scss';

const Button = ({name, icon, action, isEnabled = true}) => {
    const iconClasses = ["Icon", "fa"];
    iconClasses.push(icon);
    return (
        <span className="Button" onclick={isEnabled ? action : null}>
            {icon && (<span className={iconClasses.join(' ')}/>)}
            {name}
        </span>
    );
};

export default Button;