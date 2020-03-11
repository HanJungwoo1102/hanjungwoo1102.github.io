import React from 'react';

import styled from 'styled-components';

import { BACKGROUND2 } from '../../constants/style/color';

const FixedRightSideBar = styled.aside`
    background-color: ${BACKGROUND2};
    position: fixed;
    right: 20px;
    top: 60px;
    padding: 20px;
`;

export default ({ children }) => {
    return (
        <FixedRightSideBar>
            {children}
        </FixedRightSideBar>
    );
};
