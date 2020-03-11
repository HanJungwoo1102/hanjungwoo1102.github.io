import React from 'react';

import styled from 'styled-components';

const MenuButton = styled.button`
    position: fixed;
    top: 20px;
    left: 20px;
    z-index: 100;
`;

export default ({ clickHandler }) => {
    return (
        <MenuButton onClick={clickHandler}>
            menu
        </MenuButton>
    );
};
