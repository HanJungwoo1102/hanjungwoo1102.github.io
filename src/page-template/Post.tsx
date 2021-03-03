import { PageProps } from "gatsby";
import React, { FunctionComponent } from "react";
import Head from "../lib/Head";

import PostPage from '../view/component/page/PostPage';

const Post: FunctionComponent<PageProps> = ({ pageContext }) => {
  const post = pageContext['post'];

  return (
    <>
    <Head
      title={post.title}
      description={post.description}
    />
    <PostPage
      post={post}
    />
    </>
  );
};

export default Post;
