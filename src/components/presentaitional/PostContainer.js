import React from 'react';
import Img from "gatsby-image"
import styled from 'styled-components';

import { PostContentsWrapper } from '../styled/CenteredContentsWrapper';

const BlogPostContainer = styled.div`
    position: relative;
`;

const BlogPostImageWrapper = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;

    .gatsby-image-wrapper {
        height: 100%;
    }
    ${
        props => props.isShowContents &&
        'display:none;'
    }
`;

const BlogPostImageCover = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    position: absolute;
    top: 0;
    left: 0;

    padding: 20px;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const BlogPostContentsContainer = styled.div`
    transition: opacity 1s;
    opacity: 0;
    ${
        props => props.isShowContents &&
        'opacity: 1;'
    }
`;

export default ({
    title, date, image,
    html,
    isShowContents,
}) => {
    return (
        <BlogPostContainer>
            <BlogPostImageWrapper isShowContents={isShowContents}>
                {
                    image &&
                    <Img fluid={image.childImageSharp.fluid} />
                }
                <BlogPostImageCover>
                    <h1>{title}</h1>
                    <h2>{date}</h2>
                </BlogPostImageCover>
            </BlogPostImageWrapper>

            <PostContentsWrapper>
                <BlogPostContentsContainer isShowContents={isShowContents}>
                    <h1>{title}</h1>
                    <h2>{date}</h2>
                    <div className="blog-post-content"
                        dangerouslySetInnerHTML={{ __html: html }}
                    />
                </BlogPostContentsContainer>
            </PostContentsWrapper>
        </BlogPostContainer>
    );
};
