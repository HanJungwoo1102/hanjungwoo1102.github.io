import React from 'react';
import { Link } from 'gatsby';
import { getPathOfPost } from '../../../../lib/path';

import styled from 'styled-components';

import { BACKGROUND2, TEXT2 } from '../../../../constants/style/color';

const RelatedPost = styled.div`
    background-color: ${BACKGROUND2};
    padding: 20px;

    .title {
        color: ${TEXT2};
        font-size: 16px;
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    font-size: 12px;
    justify-content: flex-end;
    margin-top: 5px;

    a {
        color: ${TEXT2};
        margin-left: 4px;
    }
`;

const Post = styled.div`
    a {
        margin-top: 5px;
        font-size: 12px;
    }
`;

const PageInfo = styled.div`
    font-size: 12px;
    text-align: center;
    margin-top: 10px;
    color: ${TEXT2};
`;

export default ({ posts, currentPageNum, lastPageNum, prevClickHandler, nextClickHandler }) => {
    return (
        <RelatedPost>
            <div className="title" >
                Related Post
            </div>
            <ButtonContainer>
                <a onClick={prevClickHandler}>이전</a>
                <a onClick={nextClickHandler}>다음</a>
            </ButtonContainer>
            {
                posts.map((post) => {
                    return (
                        <Post key={`related-post-${post.id}`}>
                            <Link to={getPathOfPost(post.id)} >
                                - {post.title}
                            </Link>
                        </Post>
                    );
                }) 
            }
            <PageInfo>
                {currentPageNum} / {lastPageNum}
            </PageInfo>
        </RelatedPost>
    );
};
