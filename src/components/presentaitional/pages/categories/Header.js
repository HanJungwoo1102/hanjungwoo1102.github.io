import React from 'react';
import styled from 'styled-components';

import { TEXT1 } from '../../../../constants/style/color';

const Header = styled.div`
    height: 200px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .category-title {
        font-size: 16px;
        margin-bottom: 12px;
    }

    .name {
        font-size: 24px;
        font-weight: 600;
        padding-bottom: 8px;
        border-bottom: 2px solid ${TEXT1};
    }
`;

export default ({ name }) => {
    return (
        <Header>
            <div className="category-title">related to</div>
            <div className="name">{name}</div>
        </Header>
    );
};