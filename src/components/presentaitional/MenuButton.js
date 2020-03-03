import React from 'react';

import './MenuButton.css';

export default ({ clickHandler }) => {
    return (
        <button className="menu-button" onClick={clickHandler}>menu</button>
    );
};
