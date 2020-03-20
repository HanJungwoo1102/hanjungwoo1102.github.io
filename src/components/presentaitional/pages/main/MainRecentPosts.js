import React from 'react';
import PostPreview from "../../common/PostPreview";
import { MainContentsWrapper } from "../../../styled/CenteredContentsWrapper";
import styled from 'styled-components';
import { getMediaQueryOfOnlyPc } from '../../../../constants/style/size';

const MainPostContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const PostWrapper = styled.div`
    width: 80%;

    ${
        getMediaQueryOfOnlyPc(`
            width: 30%;
        `)
    }
`;

export default ({ posts }) => {
    return (
        <MainContentsWrapper>
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
    );
};
