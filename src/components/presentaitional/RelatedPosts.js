import React from 'react';
import { Link } from 'gatsby';
import { getPathOfPost } from '../../lib/path';

import styled from 'styled-components';

import { BACKGROUND2 } from '../../constants/style/color';

const RelatedPost = styled.div`
    background-color: ${BACKGROUND2};
    padding: 20px;
`;


export default ({ relatedPostList }) => {
    return (
        <RelatedPost>
            <div>
                RelatedPost
            </div>
            {
                relatedPostList.map((post) => {
                    return (
                        <Link to={getPathOfPost(post.id)} key={`related-post-${post.id}`}>
                            {post.title}
                        </Link>
                    );
                }) 
            }
        </RelatedPost>
    );
};
