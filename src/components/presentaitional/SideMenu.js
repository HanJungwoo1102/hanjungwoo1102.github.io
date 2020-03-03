import React from 'react';

import SideMenuProfile from '../container/SideMenuProfile';
import SideMenuCategory from '../container/SideMenuCategory';

import './SideMenu.css';

export default ({ isMenuOpened }) => {
    return (
        <div className={`side-menu${isMenuOpened? ' opened': ''}`}>
            <SideMenuProfile/>
            <SideMenuCategory/>
        </div>
    );
};
