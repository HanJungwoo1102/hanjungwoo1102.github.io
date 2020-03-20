import React from 'react';

import { Link } from 'gatsby';

import styled from 'styled-components';

const TopFixedHeader = styled.header`
position: fixed;
top: 0;
left: 0;
z-index: 10;

width: 100vw;
height: 60px;

display: flex;
align-items: center;

background-color: white;
border-bottom: 1px solid #000000;
`;

const TopFixedHeaderClear = styled.div`
height: 60px;
`

export default ({ title }) => {
    return (
        <>
            <TopFixedHeader>
                <Link to="/">
                    {title}
                </Link>
            </TopFixedHeader>
            <TopFixedHeaderClear/>
        </>
    );
};
