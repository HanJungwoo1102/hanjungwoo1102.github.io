import React from 'react';

import styled from 'styled-components';

import { getMediaQueryOfOnlyPc, getMediaQueryOfOnlyMobile } from '../../constants/style/size';
import { BUTTON } from '../../constants/style/color';

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

    ${
        getMediaQueryOfOnlyMobile(
            `
            bottom: 20px;
            right: 20px;
            `
        )
    }

    ${
        getMediaQueryOfOnlyPc(
            `
            top: 20px;
            left: 20px;
            `
        )
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
                    src="/icon-menu-opened.png"
                    alt="opened menu icon"
                />
                :
                <MenuIcon
                    src="/icon-menu.png"
                    alt="menu icon"
                />
            }
        </MenuButton>
    );
};
