import React from 'react';

import scrollTo from 'gatsby-plugin-smoothscroll';

import styled from 'styled-components';

import { TEXT1, TEXT2 } from '../../../../constants/style/color';

const Anchor = styled.div`
    color: ${TEXT2};
    font-size: 14px;
    padding: 3px 0;

    ${props => props.isSelected &&
        `
        color: ${TEXT1};
        border-left: 2px solid ${TEXT1};
        `
        
    }

    ${props => props.depth &&
        `padding-left: ${(props.depth) * 15}px;`
    }
`;

export default ({ title, href, depth, isSelected }) => {
    return (
        <Anchor onClick={() => scrollTo(href)} depth={depth} isSelected={isSelected}>
            {title}
        </Anchor>
    );
};
