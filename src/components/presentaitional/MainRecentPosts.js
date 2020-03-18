import React from 'react';
import PostPreview from "./PostPreview";
import { MainContentsWrapper } from "../styled/CenteredContentsWrapper";
import styled from 'styled-components';
import { getMediaQueryOfOnlyPc } from '../../constants/style/size';

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
                    posts.map(({ node }) => {
                        return (
                            <PostWrapper>
                                <PostPreview
                                    id={node.frontmatter.id}
                                    title={node.frontmatter.title}
                                    date={node.frontmatter.date}
                                    description={node.excerpt}
                                    key={node.frontmatter.id}
                                    imageFluid={node.frontmatter.image !== null ? node.frontmatter.image.childImageSharp.fluid : null}
                                />
                            </PostWrapper>
                        );
                    })
                }
            </MainPostContainer>
        </MainContentsWrapper>
    );
};
