import { navigate, PageProps } from "gatsby";
import React, { FunctionComponent } from "react";
import Head from "../lib/Head";

import HomePage from '../view/component/page/HomePage';

const Home: FunctionComponent<PageProps> = ({ pageContext }) => {
  const posts = pageContext['posts'];

  const onClickPost = ({ id }: {
    id: number;
  }) => {
    navigate(`/posts/${id}`);
  };

  return (
    <>
    <Head
      title="Home"
      description="Han Jungwoo Blog"
    />
    <HomePage
      posts={posts}
      onClickPost={onClickPost}
    />
    </>
  );
};

export default Home;
