import React from 'react';
import styled from 'styled-components';
import { getMediaQueryOfOnlyMobile, WIDTH_FIXED_RIGHT_SIDE } from '../../constants/style/size';

const FixedRightSideBar = styled.aside`
    position: fixed;
    right: 0;
    top: 0;
    padding: 20px;
    width: ${WIDTH_FIXED_RIGHT_SIDE};
    box-sizing: border-box;

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
