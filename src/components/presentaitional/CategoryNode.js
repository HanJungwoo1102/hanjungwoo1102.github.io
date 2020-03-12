import React from 'react';
import { Link } from 'gatsby';

import { getPathOfCategory } from '../../lib/path';

import styled from 'styled-components';

const CategoryNode = styled.div`
    margin-bottom: 5px;
    font-size: 14px;
`;

const ChildrenCategoryNodeContainer = styled.div`
    padding: 3px 0 0 15px;
`;

export default ({ name, children }) => {
    return (
        <CategoryNode>
            <Link to={getPathOfCategory(name)}>
                - {name}
            </Link>
            <ChildrenCategoryNodeContainer>
                { children }
            </ChildrenCategoryNodeContainer>
        </CategoryNode>
    );
};
