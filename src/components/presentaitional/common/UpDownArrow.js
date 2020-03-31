import React from 'react';

import styled from 'styled-components';

const UpDownArrow = styled.div`
    width: 5px;
    height: 5px;
    border-bottom: 1px solid #ffffff;
    border-right: 1px solid #ffffff;
    transition: transform ease 0.2s;

    &.upward {
        transform: rotate(225deg);
    }
    &.downward {
        transform: rotate(45deg);
    }
`;

export default ({ isUpward }) => {
    return <UpDownArrow className={`up-down-arrow ${isUpward ? 'upward' : 'downward'}`} />;
};
