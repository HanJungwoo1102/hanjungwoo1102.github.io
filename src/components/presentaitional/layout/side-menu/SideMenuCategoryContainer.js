import React from 'react';

import styled from 'styled-components';

const SideMenuCategoryContainer = styled.div`

`;

const SideMenuCategoryContainerTitle = styled.div`
    margin-bottom: 15px;
`;

export default ({ children }) => {

    return (
        <SideMenuCategoryContainer>
            <SideMenuCategoryContainerTitle>Category</SideMenuCategoryContainerTitle>
            {children}
        </SideMenuCategoryContainer>
    );
};
