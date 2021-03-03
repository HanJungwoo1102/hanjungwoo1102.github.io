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
  description: string;
  postThemeNames: string[];
}

const HomePage: FunctionComponent<Props> = ({
  posts, onClickPost,
}) => {
  return (
    <div className="home-page-comp">
      <h1 className="title">Han Jungwoo</h1>

      <div className="greeting">
        hello
      </div>

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
                  <p className="date">{post.dateString}</p>
                  <p className="title">{post.title}</p>
                  <p className="post-theme-container">
                    {
                      post.postThemeNames.map((name) => (
                        <span key={name}>{name}</span>
                      ))
                    }
                  </p>
                  <p className="description">{post.description}</p>
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
