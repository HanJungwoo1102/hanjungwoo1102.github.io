import React, { FunctionComponent } from 'react';

import './index.scss';

interface Props {
  mainImageUrl: string;
  dateString: string;
  title: string;
  postThemeNames: string[];
  description: string;
}

const PostCard: FunctionComponent<Props> = ({
  title, description, dateString, mainImageUrl, postThemeNames,
}) => {
  return (
    <div className="post-card-comp">
      <div
        className="main-image-container"
        style={{
          backgroundImage: `url(${mainImageUrl})`
        }}
      />
      <div className="description-container">
        <p className="date">{dateString}</p>
        <p className="title">{title}</p>
        <p className="post-theme-container">
          {
            postThemeNames.map((name) => (
              <span key={name}>{name}</span>
            ))
          }
        </p>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default PostCard;
