import React, { useCallback, useState } from 'react';

import Category from '../../datum/category';
import CategoryNode from '../presentaitional/layout/side-menu/CategoryNode';
import RootCategoryNode from '../presentaitional/layout/side-menu/RootCategoryNode';

import SideMenuCategoryContainer from '../presentaitional/layout/side-menu/SideMenuCategoryContainer';

export default () => {
    const [openedRootCategoryName, setOpenedRootCategoryName] = useState('');

    const rootCategoryNameClickHandler = useCallback((name) => {
        if (openedRootCategoryName === name) {
            setOpenedRootCategoryName('');
        } else {
            setOpenedRootCategoryName(name);
        }
    }, [openedRootCategoryName]);

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

    const getRootCategoryComponent = useCallback((categoryNode) => {
        return (
            <RootCategoryNode
                name={categoryNode.name}
                isOpened={openedRootCategoryName === categoryNode.name}
                nameClickHandler={rootCategoryNameClickHandler}
                key={`category-node-${categoryNode.name}`}
            >
                {
                    categoryNode.children.length > 0 &&
                    categoryNode.children.map((childCategoryNode) => {
                        return getCategoryComponent(childCategoryNode)
                    })
                }
            </RootCategoryNode>
        )
    }, [rootCategoryNameClickHandler, getCategoryComponent, openedRootCategoryName]);

    return (
        <SideMenuCategoryContainer>
            {
                Category.CATEGORY.children.map((categoryNode) => {
                    return getRootCategoryComponent(categoryNode);
                })
            }
        </SideMenuCategoryContainer>
    );
};
