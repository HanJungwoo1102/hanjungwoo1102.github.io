import React, { FunctionComponent } from 'react';

import './index.scss';

interface Props {
  posts: Post[];
  onClickPost: (post: Post) => void;
}

interface Post {
  id: number;
  title: string;
  dateString: string;
  mainImageUrl: string;
}

const HomePage: FunctionComponent<Props> = ({
  posts, onClickPost,
}) => {
  return (
    <div className="home-page-comp">
      <h1 className="title">Han Jungwoo</h1>

      <div className="post-container">
        {
          posts.map((post) => (
            <div
              className="post-wrapper"
              key={post.id}
              onClick={() => onClickPost(post)}
            >
              <div className="post">
                <div
                  className="main-image-container"
                  style={{
                    backgroundImage: `url(${post.mainImageUrl})`
                  }}
                />
                <div className="description-container">
                  <p>{post.dateString}</p>
                  <p>{post.title}</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default HomePage;
