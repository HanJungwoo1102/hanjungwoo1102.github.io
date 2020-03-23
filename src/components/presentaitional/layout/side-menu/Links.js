import React from 'react';

import { GITHUB, INSTGRAM } from '../../../../datum/author';

import styled from 'styled-components';

import { TEXT1, BUTTON } from '../../../../constants/style/color';
import { ICON_GITHUB, ICON_INSTGRAM } from '../../../../constants/resources/image';

const Links = styled.div`
    display: flex;
    justify-content: center;
`;

const Link = styled.a`
    display: flex;
    align-items: center;
    font-size: 12px;
    padding: 8px 16px;
    border-radius: 4px;
    color: ${TEXT1};
    background-color: ${BUTTON};
    flex-wrap: wrap;
    margin: 5px;
    font-weight: 500;

    img {
        width: 16px;
        height: 16px;
        margin-right: 8px;
    }
`;

export default () => {
    return (
        <Links>
            <Link href={GITHUB} target="_blank">
                <img src={ICON_GITHUB} alt="github icon" />
                GITHUB
            </Link>
            <Link href={INSTGRAM} target="_blank">
                <img src={ICON_INSTGRAM} alt="instagram icon" />
                INSTGRAM
            </Link>
        </Links>
    );
};