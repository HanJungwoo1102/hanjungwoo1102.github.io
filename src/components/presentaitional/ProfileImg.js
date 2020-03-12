import React from 'react';

import styled from 'styled-components';
import { PROFILE } from '../../constants/style/color';

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
                src="/hjwBlue.png"
                alt="profile image"
            />
        </CircleContainer>
    );
};
