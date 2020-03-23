import React from 'react';
import styled from 'styled-components';

import PostPreview from "../../../presentaitional/common/PostPreview";
import { CategoryContentsWrapper } from '../../../styled/CenteredContentsWrapper';

import { getMediaQueryOfOnlyPc } from '../../../../constants/style/size';


const PostWrapper = styled.div`
    width: 100%;
    margin-bottom: 24px;

    ${
        getMediaQueryOfOnlyPc(`
            width: 244px;
            margin-right: 20px;
        `)
    }
`;

export default ({ posts }) => {
    return (
        <CategoryContentsWrapper>
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
        </CategoryContentsWrapper>
    );
};
