import React, { useCallback } from 'react';

import Category from '../../datum/category';
import CategoryNode from '../presentaitional/CategoryNode';

export default () => {
    const getCategoryComponent = useCallback((categoryNode) => {
        return (
            <CategoryNode name={categoryNode.name} key={`category-node-${categoryNode.name}`}>
                {
                    categoryNode.children.length > 0 &&
                    categoryNode.children.map((childCategoryNode) => {
                        return getCategoryComponent(childCategoryNode)
                    })
                }
            </CategoryNode>
        );
    }, []);

    return (
        <div>
            <div>Category</div>
            {
                Category.CATEGORY.children.map((categoryNode) => {
                    return getCategoryComponent(categoryNode);
                })
            }
        </div>
    );
};
