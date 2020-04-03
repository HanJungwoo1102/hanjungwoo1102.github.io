import React from 'react';
import Img from "gatsby-image"
import styled from 'styled-components';
import { conditionOfMediaQuery } from '../../../../constants/style/size';
import { PostContentsWrapper } from '../../../styled/CenteredContentsWrapper';

const BlogPostContainer = styled.div`
    position: relative;
`;

const BlogPostFullImage = styled.div`
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

    @media ${conditionOfMediaQuery.laptop} {
        display: none;
    }
`;

const BlogPostFullImageCover = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    position: absolute;
    top: 0;
    left: 0;
    text-align: center;

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

    @media ${conditionOfMediaQuery.laptop} {
        opacity: 1;
    }

    ${
        props => props.isShowContents &&
        'opacity: 1;'
    }
`;

const TitleContainer = styled.div`
    text-align: center;
    padding: 50px 0 100px;

    h1 {
        font-size: 20px;
    }

    h4 {
        font-size: 15px;
        font-weight: 400;
    }
`;

const Content = styled.div`
    hr {
        margin: 80px 0;
    }
    line-height: 27px;
    h1,h2,h3,h4,h5,h6 {
        margin: 30px 0;
    }
`;

const HeaderImage = styled.div`
    display: none;
    height: 500px;

    .gatsby-image-wrapper {
        width: 100%;
        height: 100%;
    }

    @media ${conditionOfMediaQuery.laptop} {
        display: block;
    }
`;

export default ({
    title, date, image,
    html,
    isShowContents,
}) => {
    return (
        <BlogPostContainer>
            <BlogPostFullImage isShowContents={isShowContents}>
                {
                    image &&
                    <Img fluid={image.childImageSharp.fluid} />
                }
                <BlogPostFullImageCover>
                    <h1>{title}</h1>
                    <h2>{date}</h2>
                </BlogPostFullImageCover>
            </BlogPostFullImage>
            <HeaderImage>
                {
                    image &&
                    <Img fluid={image.childImageSharp.fluid} />
                }
            </HeaderImage>
            <TitleContainer>
                <h1>{title}</h1>
                <h4>{date}</h4>
            </TitleContainer>
            <PostContentsWrapper>
                <BlogPostContentsContainer isShowContents={isShowContents}>
                    <Content
                        dangerouslySetInnerHTML={{ __html: html }}
                    />
                </BlogPostContentsContainer>
            </PostContentsWrapper>
        </BlogPostContainer>
    );
};
