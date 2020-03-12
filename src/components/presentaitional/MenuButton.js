import React from 'react';

import styled from 'styled-components';
import { getMediaQueryOfOnlyPc, getMediaQueryOfOnlyMobile } from '../../constants/style/size';

const MenuButton = styled.button`
    position: fixed;
    z-index: 100;
    
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

export default ({ clickHandler }) => {
    return (
        <MenuButton onClick={clickHandler}>
            menu
        </MenuButton>
    );
};
