import React, { FunctionComponent } from 'react';

import './index.scss';

interface Props {
  post: Post;
}

interface Post {
  title: string;
  html: string;
  mainImageUrl: string;
  dateString: string;
}

const PostPage: FunctionComponent<Props> = ({
  post,
}) => {
  return (
    <div className="post-page-comp">
      <div
        className="main-image-container"
        style={{
          backgroundImage: `url(${post.mainImageUrl})`,
        }}
      >
        <div className="cover">
          <div className="center">
            <h1 className="title">{post.title}</h1>
            <h3 className="date">{post.dateString}</h3>
          </div>
        </div>
      </div>
      <div className="contents-container">
        <div
          className="description markdown-style"
          dangerouslySetInnerHTML={{ __html: post.html }}
        >

        </div>
      </div>
    </div>
  );
};

export default PostPage;
