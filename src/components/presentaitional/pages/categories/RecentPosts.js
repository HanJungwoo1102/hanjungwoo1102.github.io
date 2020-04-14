import React from 'react';
import styled from 'styled-components';

import PostPreview from "../../../presentaitional/common/PostPreview";
import { CategoryContentsWrapper } from '../../../styled/CenteredContentsWrapper';

import { conditionOfMediaQuery } from '../../../../constants/style/size';

const PostContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
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
        <CategoryContentsWrapper>
            <PostContainer>
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
            </PostContainer>
        </CategoryContentsWrapper>
    );
};
