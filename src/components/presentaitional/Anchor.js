import React from 'react';

import scrollTo from 'gatsby-plugin-smoothscroll';

import styled from 'styled-components';

const Anchor = styled.div`
    font-size: 14px;

    ${props => props.isSelected &&
        'font-weight: 600;'
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
