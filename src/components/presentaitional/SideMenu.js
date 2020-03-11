import React from 'react';

import SideMenuProfile from '../container/SideMenuProfile';
import SideMenuCategory from '../container/SideMenuCategory';

import styled from 'styled-components';

import { BACKGROUND2 } from '../../constants/style/color';

const SideMenu = styled.aside`
    background-color: ${BACKGROUND2};
    position: fixed;
    padding: 20px;
    top: 0;
    height: 100vh;
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
