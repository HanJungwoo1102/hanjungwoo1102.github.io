import React, { useMemo, useCallback, useState, useEffect } from 'react';

import RelatedPosts from '../../../presentaitional/pages/posts/RelatedPosts';

const MAX_NUMBER_OF_POST_IN_ONE_PAGE = 5;

const getPageIndexOfPost = (idx) => {
    return Math.floor(idx / MAX_NUMBER_OF_POST_IN_ONE_PAGE);
};

export default ({ posts, currentPostId }) => {
    const [currentPageIndex, setCurrentPageIndex] = useState(0);

    useEffect(() => {
        setCurrentPageIndex(getPageIndexOfPost(posts.findIndex(post => post.id === currentPostId)));
    }, [posts, currentPostId]);

    const currentPagePosts = useMemo(() => {
        const curPagePosts = [];
        for (let i = 0; i < MAX_NUMBER_OF_POST_IN_ONE_PAGE; i ++) {
            const post = posts[MAX_NUMBER_OF_POST_IN_ONE_PAGE * currentPageIndex + i];
            if (post) {
                curPagePosts.push(post);
            }
        }
        return curPagePosts;
    }, [posts, currentPageIndex]);

    const lastPageIndex = useMemo(() => {
        return getPageIndexOfPost(posts.length - 1);
    }, [posts]);

    
    const prevClickHandler = useCallback(() => {
        if (currentPageIndex === 0) {
            setCurrentPageIndex(lastPageIndex);
        } else {
            setCurrentPageIndex(currentPageIndex - 1);
        }
    }, [currentPageIndex]);

    const nextClickHandler = useCallback(() => {
        if (currentPageIndex === lastPageIndex) {
            setCurrentPageIndex(0);
        } else {
            setCurrentPageIndex(currentPageIndex + 1);
        }
    }, []);

    return (
        <RelatedPosts
            posts={currentPagePosts}
            currentPageNum={currentPageIndex + 1}
            lastPageNum={lastPageIndex + 1}
            prevClickHandler={prevClickHandler}
            nextClickHandler={nextClickHandler}
        />
    );
};