import React from 'react';

import styled from 'styled-components';

const FixedRightSideBar = styled.aside`
    position: fixed;
    right: 0;
    top: 60px;
`

export default ({ children }) => {
    return (
        <FixedRightSideBar>
            {children}
        </FixedRightSideBar>
    );
};
