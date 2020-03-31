import React from 'react';

import styled from 'styled-components';

const SideMenuCategoryContainer = styled.div`

`;

export default ({ children }) => {

    return (
        <SideMenuCategoryContainer>
            {children}
        </SideMenuCategoryContainer>
    );
};
