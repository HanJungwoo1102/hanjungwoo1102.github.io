import React from 'react';

import { Link } from "gatsby"

import { getPathOfPost } from '../../../lib/path';

import styled from 'styled-components';

import { BACKGROUND2, TEXT2 } from '../../../constants/style/color';

const PostPreview = styled.div`
    /* background-color: ${BACKGROUND2}; */
    padding: 15px;
    margin-bottom: 15px;
`;

const PostPreviewImage = styled.img`
    width: 100%;
    height: 250px;
`;

const PostInformation = styled.div`
    margin-top: 10px;

    .post-preview-title {
        font-size: 14px;
        font-weight: 600;
    }
    .post-preview-date {
        font-size: 11px;
        color: ${TEXT2};
    }
    .post-preview-description {
        margin-top: 4px;
        font-size: 12px;
        color: ${TEXT2};
    }

`;

export default ({ id, title, date, description, image }) => {
    return (
        <Link to={getPathOfPost(id)}>
            <PostPreview>
                {
                    image ?
                        <PostPreviewImage src={image} />
                    :
                        <PostPreviewImage src="/default-post-image.png" />
                }
                <PostInformation>
                    <div className="post-preview-title">{title}</div>
                    <div className="post-preview-date">{date}</div>
                    <div className="post-preview-description">{description}</div>
                </PostInformation>
            </PostPreview>
        </Link>
    );
};
