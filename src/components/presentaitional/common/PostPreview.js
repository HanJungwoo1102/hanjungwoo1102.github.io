import React from 'react';
import { Link } from "gatsby"

import { getPathOfPost } from '../../../lib/path';

import styled from 'styled-components';

import { TEXT2 } from '../../../constants/style/color';
import { DEFAULT_POST } from '../../../constants/resources/image';

const PostPreview = styled.div`
    margin-bottom: 15px;
`;

const PostPreviewImage = styled.div`
    width: 100%;
    padding-top: 65%;
    background-size: 100% 100%;

    ${
        props => props.backgroundImage &&
        `background-image: url('${props.backgroundImage}');`
    }
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
                        <PostPreviewImage backgroundImage={image} />
                    :
                        <PostPreviewImage backgroundImage={DEFAULT_POST} />
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
