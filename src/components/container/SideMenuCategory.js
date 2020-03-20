import React, { useCallback } from 'react';

import Category from '../../datum/category';
import CategoryNode from '../presentaitional/layout/side-menu/CategoryNode';

import SideMenuCategoryContainer from '../presentaitional/layout/side-menu/SideMenuCategoryContainer';

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
        <SideMenuCategoryContainer>
            {
                Category.CATEGORY.children.map((categoryNode) => {
                    return getCategoryComponent(categoryNode);
                })
            }
        </SideMenuCategoryContainer>
    );
};
