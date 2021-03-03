import React, { FunctionComponent } from 'react';
import PostCard from '../../card/PostCard';

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
              <PostCard
                title={post.title}
                dateString={post.dateString}
                postThemeNames={post.postThemeNames}
                description={post.description}
                mainImageUrl={post.mainImageUrl}
              />
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default HomePage;
