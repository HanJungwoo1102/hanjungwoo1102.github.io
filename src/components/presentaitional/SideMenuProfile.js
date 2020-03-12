import React from 'react';

import ProfileImg from '../presentaitional/ProfileImg';

import styled from 'styled-components';

const SideMenuProfile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20px;
`;

const Title = styled.div`
    margin-bottom: 20px;
`;

export default ({ title }) => {
    return (
        <SideMenuProfile>
            <Title>{title}</Title>
            <ProfileImg/>
        </SideMenuProfile>
    );
};
