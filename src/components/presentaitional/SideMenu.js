import React from 'react';

import SideMenuProfile from '../container/SideMenuProfile';
import SideMenuCategory from '../container/SideMenuCategory';

import styled from 'styled-components';

const SideMenu = styled.aside`
    position: fixed;
    top: 0;
    ${props => props.isOpened?
        `
            left: 0;
            right: auto;
        `
        :
        `
            right: 100%;
        `
    }
`;

export default ({ isMenuOpened }) => {
    return (
        <SideMenu isOpened={isMenuOpened}>
            <SideMenuProfile/>
            <SideMenuCategory/>
        </SideMenu>
    );
};
