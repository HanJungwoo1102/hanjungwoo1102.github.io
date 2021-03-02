import { PageProps } from "gatsby";
import React, { FunctionComponent } from "react";

import PostPage from '../view/component/page/PostPage';

const Post: FunctionComponent<PageProps> = ({ pageContext }) => {
  const post = pageContext['post'];

  return (
    <PostPage
      post={post}
    />
  );
};

export default Post;
