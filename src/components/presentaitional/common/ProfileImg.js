import React from 'react';

import styled from 'styled-components';
import { PROFILE } from '../../../constants/style/color';

import * as IMAGE from '../../../constants/resources/image'

const CircleContainer = styled.div`
    border-radius: 50%;
    width: 150px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${PROFILE};
`;

const ProfileImg = styled.img`
    width: 100px;
`;

export default () => {
    return (
        <CircleContainer>
            <ProfileImg 
                src={IMAGE.PROFILE}
                alt="profile image"
            />
        </CircleContainer>
    );
};
