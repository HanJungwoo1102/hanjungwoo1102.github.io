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
`;

export default ({ title }) => {
    return (
        <SideMenuProfile>
            <Link to={getPathOfMain()}>
                <Title>{title}</Title>
            </Link>
            <ProfileImg/>
        </SideMenuProfile>
    );
};
