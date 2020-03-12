import React from 'react';

import styled from 'styled-components';

import { getMediaQueryOfOnlyMobile } from '../../constants/style/size';

const FixedRightSideBar = styled.aside`
    position: fixed;
    right: 0;
    top: 0;
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
