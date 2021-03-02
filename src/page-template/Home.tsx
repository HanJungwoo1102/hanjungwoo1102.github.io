import { PageProps } from "gatsby";
import React, { FunctionComponent } from "react";

import HomePage from '../view/component/page/HomePage';

const Home: FunctionComponent<PageProps> = ({ pageContext }) => {
  const posts = pageContext['posts'];

  const onClickPost = ({ id }: {
    id: number;
  }) => {

  };

  return (
    <HomePage
      posts={posts}
      onClickPost={onClickPost}
    />
  );
};

export default Home;
