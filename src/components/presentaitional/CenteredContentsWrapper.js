import React from 'react';
import styled from 'styled-components';
import { MAX_WIDTH_OF_PAGE } from '../../constants/style/size';

const CenteredContentsWrapper = styled.main`
    max-width: ${MAX_WIDTH_OF_PAGE};
    box-sizing: border-box;
    padding: 20px;
    margin: 0 auto;
`;


export default ({ children, isCenteredContents = false }) => {
    return (
        <CenteredContentsWrapper>
            {children}
        </CenteredContentsWrapper>
    );
};