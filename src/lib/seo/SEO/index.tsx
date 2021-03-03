import React, { FunctionComponent } from 'react';

import { Helmet } from 'react-helmet'

interface Props {
  title: string;
  description: string;
}

const Head: FunctionComponent<Props> = ({
  title, description,
}) => {
  return (
    <Helmet
      title={title}
      
    />
  )
};

export default Head;
