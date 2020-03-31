import React from 'react';

import styled from 'styled-components';
import UpDownArrow from '../../common/UpDownArrow';

const RootCategoryNode = styled.div`
    
`;

const Name = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    border-bottom: 1px solid #ffffff;
    padding: 8px 0;
    font-size: 14px;
`;

const ChildrenCategoryNodeContainer = styled.div`
    transition: opacity 0.5s ease-out;
    opacity: 0;
    height: 0;
    box-sizing: border-box;
    overflow: hidden;
    ${
        props => props.isOpened &&
        `
        padding: 10px;    
        opacity: 1;
        height: auto;
        `
    }
`;

export default ({ name, isOpened, nameClickHandler, children }) => {
    return (
        <RootCategoryNode>
            <Name
                onClick={() => nameClickHandler(name)}
            >
                {name}  <UpDownArrow isUpward={isOpened}/>
            </Name>
            {
                <ChildrenCategoryNodeContainer isOpened={isOpened}>
                    { children }
                </ChildrenCategoryNodeContainer>
            }
        </RootCategoryNode>
    );
};
