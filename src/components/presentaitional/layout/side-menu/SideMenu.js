import React from 'react';

import SideMenuProfile from '../../../container/SideMenuProfile';
import SideMenuCategory from '../../../container/SideMenuCategory';
import Links from './Links';

import styled from 'styled-components';

import { getMediaQueryOfOnlyPc } from '../../../../constants/style/size';
import { BACKGROUND2 } from '../../../../constants/style/color';

const WIDTH_MOBILE_SIDE_MENU = '100vw';
const WIDTH_PC_SIDE_MENU = '300px';

const SideMenu = styled.aside`
    background-color: ${BACKGROUND2};
    position: fixed;
    padding: 20px;
    top: 0;
    box-sizing: border-box;
    width: ${WIDTH_MOBILE_SIDE_MENU};
    height: 100vh;
    transition: left 0.3s;
    ${props => props.isOpened?
        `
            left: 0;
        `
        :
        `
            left: -${WIDTH_MOBILE_SIDE_MENU};
            ${getMediaQueryOfOnlyPc(
                `
                    left: -${WIDTH_PC_SIDE_MENU};
                `
            )}
        `
    }

    ${
        getMediaQueryOfOnlyPc(
            `
            padding-top: 80px;
            width: ${WIDTH_PC_SIDE_MENU};
            `
        )
    }
`;

export default ({ isMenuOpened }) => {
    return (
        <SideMenu isOpened={isMenuOpened}>
            <SideMenuProfile/>
            <Links/>
            <SideMenuCategory/>
        </SideMenu>
    );
};
