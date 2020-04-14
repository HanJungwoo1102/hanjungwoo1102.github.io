import React, { useCallback, useState } from 'react';
import { useStaticQuery, graphql } from "gatsby"

import Category from '../../datum/category';
import CategoryNode from '../presentaitional/layout/side-menu/CategoryNode';
import RootCategoryNode from '../presentaitional/layout/side-menu/RootCategoryNode';
import SideMenuCategoryContainer from '../presentaitional/layout/side-menu/SideMenuCategoryContainer';

export default () => {
    const [openedRootCategoryName, setOpenedRootCategoryName] = useState('');

    const { allTags } = useStaticQuery(graphql`
        query {
            allTags {
                name
                postIds
            }
        }
    `);

    const rootCategoryNameClickHandler = useCallback((name) => {
        if (openedRootCategoryName === name) {
            setOpenedRootCategoryName('');
        } else {
            setOpenedRootCategoryName(name);
        }
    }, [openedRootCategoryName]);

    const getCategoryComponent = useCallback((categoryNode) => {
        const { name, children } = categoryNode;
        const tag = allTags.find(tag => tag.name === name);

        let count;
        if (tag) {
            count = tag.postIds.length;
        }

        return (
            <CategoryNode
                name={name}
                key={`category-node-${name}`}
                count={count}
            >
                {
                    children.length > 0 &&
                    children.map((childCategoryNode) => {
                        return getCategoryComponent(childCategoryNode);
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
                        return getCategoryComponent(childCategoryNode);
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
