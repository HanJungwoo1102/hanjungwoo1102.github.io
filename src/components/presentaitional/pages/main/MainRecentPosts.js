import React from 'react';
import PostPreview from "../../common/PostPreview";
import { MainContentsWrapper } from "../../../styled/CenteredContentsWrapper";
import styled from 'styled-components';
import { conditionOfMediaQuery } from '../../../../constants/style/size';

const MainPostContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Title = styled.div`
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 24px;
`;

const PostWrapper = styled.div`
    width: 100%;
    margin-bottom: 24px;

    @media ${conditionOfMediaQuery.laptop} {
        width: 244px;
        margin-right: 20px;
    }
`;

export default ({ posts }) => {
    return (
        <>
            <MainContentsWrapper>
                <Title>
                    Recent Post
                </Title>
                <MainPostContainer>
                    {
                        posts.map((post) => {
                            return (
                                <PostWrapper>
                                    <PostPreview
                                        id={post.id}
                                        title={post.title}
                                        date={post.date}
                                        description={post.description}
                                        key={post.id}
                                        image={post.image}
                                    />
                                </PostWrapper>
                            );
                        })
                    }
                </MainPostContainer>
            </MainContentsWrapper>
        </>
    );
};
