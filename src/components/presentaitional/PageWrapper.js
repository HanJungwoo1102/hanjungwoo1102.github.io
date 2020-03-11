import React from 'react';

import styled from 'styled-components';

const PageWrapper = styled.main`
    max-width: 730px;
    padding: 20px;
    margin: 0 auto;
`;


export default ({ children }) => {
    return (
        <PageWrapper>
            {children}
        </PageWrapper>
    );
};