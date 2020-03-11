import React from 'react';

import scrollTo from 'gatsby-plugin-smoothscroll';

import styled from 'styled-components';

import { TEXT1, TEXT2 } from '../../constants/style/color';

const Anchor = styled.div`
    color: ${TEXT2};
    font-size: 14px;

    ${props => props.isSelected &&
        `color: ${TEXT1};`
    }

    ${props => props.depth &&
        `margin-left: ${(props.depth - 2) * 15}px;`
    }
`;

export default ({ title, href, depth, isSelected }) => {
    return (
        <Anchor onClick={() => scrollTo(href)} depth={depth} isSelected={isSelected}>
            {title}
        </Anchor>
    );
};
