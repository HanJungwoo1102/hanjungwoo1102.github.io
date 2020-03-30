import React from 'react';

import styled from 'styled-components';

import { conditionOfMediaQuery } from '../../../constants/style/size';
import { BUTTON } from '../../../constants/style/color';

import { ICON_MENU, ICON_MENU_OPENED } from '../../../constants/resources/image';

const MenuButton = styled.button`
    position: fixed;
    z-index: 100;
    background-color: ${BUTTON};
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    outline: 0;
    bottom: 20px;
    right: 20px;

    @media ${conditionOfMediaQuery.laptop} {
        top: 20px;
        left: 20px;
    }
`;

const MenuIcon = styled.img`
    width: 30px;
    height: 30px;
`;

export default ({ clickHandler, isMenuOpened }) => {
    return (
        <MenuButton onClick={clickHandler}>
            {
                isMenuOpened?
                <MenuIcon 
                    src={ICON_MENU_OPENED}
                    alt="opened menu icon"
                />
                :
                <MenuIcon
                    src={ICON_MENU}
                    alt="menu icon"
                />
            }
        </MenuButton>
    );
};
