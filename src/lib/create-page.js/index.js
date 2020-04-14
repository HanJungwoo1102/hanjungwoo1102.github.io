const path = require(`path`)
const { getPathOfPost, getPathOfCategory, getPathOfTag } = require('../path');
const { CATEGORY, getCategoryNodeByPostId, getAllPostIdsOfCategoryNode } = require('../../datum/category');

const PageCreator = (createPage, posts) => {
    const tagMap = createTagMap(posts);

    return {
        createPageOfPost: () => {
            const postsTemplateComponent = path.resolve(`src/templates/posts.js`);
        
            posts.forEach((post) => {
                const postId = post.id;
                const relatedPostIds = getRelatedPostIds(postId);
        
                createPage({
                    path: getPathOfPost(postId),
                    component: postsTemplateComponent,
                    context: {
                        postId,
                        relatedPostIds,
                    }, // additional data can be passed via context
                });
            });
        },

        createPageOfCategory: () => {
            const categoriesTemplateComponent = path.resolve(`src/templates/categories.js`);
            
            const createPageOfCategoryNode = (categoryNode) => {
                const { name } = categoryNode;
                const postIds = getAllPostIdsOfCategoryNode(categoryNode);
        
                createPage({
                    path: getPathOfCategory(categoryNode.name),
                    component: categoriesTemplateComponent,
                    context: {
                        name,
                        postIds,
                    },
                });
        
                categoryNode.children.forEach((childCategoryNode) => {
                    createPageOfCategoryNode(childCategoryNode);
                });
            };
        
            createPageOfCategoryNode(CATEGORY);
        },

        createPageOfTag: () => {
            const tagsTemplateComponent = path.resolve(`src/templates/tags.js`);

            Object.entries(tagMap).forEach(([tagName, postIdsInTag]) => {
                createPage({
                    path: getPathOfTag(tagName),
                    component: tagsTemplateComponent,
                    context: {
                        name: tagName,
                        postIds: postIdsInTag,
                    },
                });
            })
        },
    }
}

const getRelatedPostIds = (postId) => {
    const relatedIds = [];

    const categoryNodeOfPost = getCategoryNodeByPostId(CATEGORY, postId);

    if (categoryNodeOfPost) {
        relatedIds.push(...getAllPostIdsOfCategoryNode(categoryNodeOfPost));
    }

    return relatedIds;
};

const createTagMap = (posts) => {
    const result = {}

    posts.forEach((post) => {
        const { tags, id } = post;
        if (tags && tags.length) {
            tags.forEach((tag) => {
                if (result[tag] === undefined) {
                    result[tag] = [id];
                } else {
                    result[tag].push(id);
                }
            })
        }
    });

    return result;
}

exports.PageCreator = PageCreator;