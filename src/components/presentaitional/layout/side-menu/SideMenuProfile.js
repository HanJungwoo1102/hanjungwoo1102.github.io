import React from 'react';
import ProfileImg from '../../common/ProfileImg';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { getPathOfMain } from '../../../../lib/path';

const SideMenuProfile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20px;
`;

const Title = styled.div`
    margin-bottom: 20px;
    text-align: center;
`;

export default ({ title }) => {
    return (
        <SideMenuProfile>
            <Link to={getPathOfMain()}>
                <Title>{title}</Title>
                <ProfileImg/>
            </Link>
        </SideMenuProfile>
    );
};
