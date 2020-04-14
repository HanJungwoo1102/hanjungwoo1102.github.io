const path = require(`path`)
const { getPathOfPost, getPathOfCategory, getPathOfTag } = require('../path');
const { CATEGORY, getCategoryNodeByPostId, getAllPostIdsOfCategoryNode } = require('../../datum/category');

const PageCreator = (createPage, posts) => {
    const tagMap = createTagMap(posts);

    return {
        createPageOfPost: () => {
            const postsTemplateComponent = path.resolve(`src/templates/posts.js`);
        
            posts.forEach((post) => {
                const { id, tags } = post;
                let relatedPostIds = [];

                if (tags && tags.length > 0) {
                    relatedPostIds = tagMap[tags[0]];
                }
        
                createPage({
                    path: getPathOfPost(id),
                    component: postsTemplateComponent,
                    context: {
                        postId: id,
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
exports.createTagMap = createTagMap;