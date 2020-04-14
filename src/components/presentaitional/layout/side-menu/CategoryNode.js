import React from 'react';
import { Link } from 'gatsby';

import { getPathOfTag } from '../../../../lib/path';

import styled from 'styled-components';

const CategoryNode = styled.div`
    margin-bottom: 5px;
    font-size: 12px;
`;

const ChildrenCategoryNodeContainer = styled.div`
    padding: 3px 0 0 15px;
`;

export default ({ name, count, children }) => {
    return (
        <CategoryNode>
            {
                count && count > 0 ?
                    <Link to={getPathOfTag(name)}>
                        - {name} {count && `(${count})`}
                    </Link>
                :
                    <div>
                        - {name}
                    </div>
            }
            <ChildrenCategoryNodeContainer>
                { children }
            </ChildrenCategoryNodeContainer>
        </CategoryNode>
    );
};