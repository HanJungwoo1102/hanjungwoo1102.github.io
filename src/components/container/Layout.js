import React, { useState } from 'react';

import PageWrapper from '../presentaitional/PageWrapper';
import MenuButton from '../presentaitional/MenuButton';
import SideMenu from '../presentaitional/SideMenu';

export default ({ children }) => {
    const [isMenuOpened, setIsMenuOpened] = useState(false);

    return (
        <>
            <PageWrapper>
                {children}
            </PageWrapper>
            <MenuButton clickHandler={() => setIsMenuOpened(!isMenuOpened)}/>
            <SideMenu isMenuOpened={isMenuOpened}/>
        </>
    );
};
