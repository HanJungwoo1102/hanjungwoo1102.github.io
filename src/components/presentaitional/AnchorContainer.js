import React from 'react';
import styled from 'styled-components';
import { BACKGROUND2 } from '../../constants/style/color';

const AnchorContainer = styled.div`
    background-color: ${BACKGROUND2};
    padding: 20px;
    margin-bottom: 20px;
    max-height: 500px;
    overflow-y: auto;
`;


export default ({ children }) => {
    return (
        <AnchorContainer>
            {children}
        </AnchorContainer>
    );
};
