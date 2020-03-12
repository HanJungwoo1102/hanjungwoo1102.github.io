import React from 'react';

import styled from 'styled-components';

import { BACKGROUND2 } from '../../constants/style/color';
import { getMediaQueryOfOnlyMobile } from '../../constants/style/size';

const FixedRightSideBar = styled.aside`
    background-color: ${BACKGROUND2};
    position: fixed;
    right: 20px;
    top: 60px;
    padding: 20px;

    ${
        getMediaQueryOfOnlyMobile(
            `
            display: none;
            `
        )
    }
`;

export default ({ children }) => {
    return (
        <FixedRightSideBar>
            {children}
        </FixedRightSideBar>
    );
};
