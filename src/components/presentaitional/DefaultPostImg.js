import React from 'react';

import styled from 'styled-components';

const DefaultPostImage = styled.img`
    width: 100%;
`;

export default () => {
    return (
        <DefaultPostImage
            src="/default-post-image.png"
            alt="default post image"
        />
    );
};
