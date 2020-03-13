import React, { useState } from 'react';

import PageWrapper from './PageWrapper';
import MenuButton from './MenuButton';
import SideMenu from './SideMenu';

import { createGlobalStyle } from 'styled-components';

import * as COLOR from '../../constants/style/color';

const GlobalStyle = createGlobalStyle`
    a:link, a:visited, a:active { text-decoration:none; color:${COLOR.TEXT1}; }

    body {
        margin: 0;
        color: ${COLOR.TEXT1};
        background-color: ${COLOR.BACKGROUND1};
    }
`;

export default ({ children }) => {
    const [isMenuOpened, setIsMenuOpened] = useState(false);

    return (
        <>
            <GlobalStyle/>
            <PageWrapper>
                {children}
            </PageWrapper>
            <MenuButton
                isMenuOpened={isMenuOpened}
                clickHandler={() => setIsMenuOpened(!isMenuOpened)}
            />
            <SideMenu isMenuOpened={isMenuOpened}/>
        </>
    );
};