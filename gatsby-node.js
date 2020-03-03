const path = require(`path`)
const { CATEGORY, getCategoryNodeByPostId, getAllPostIdsOfCategoryNode } = require('./src/datum/category');
const { getPathOfPost, getPathOfCategory } = require('./src/lib/path');

const getRelatedPostIds = (postId) => {
    const relatedIds = [];

    const categoryNodeOfPost = getCategoryNodeByPostId(CATEGORY, postId);

    if (categoryNodeOfPost) {
        relatedIds.push(...getAllPostIdsOfCategoryNode(categoryNodeOfPost));
    }

    return relatedIds;
};

const createPageOfPost = (createPage) => (edges) => {
    const postsTemplateComponent = path.resolve(`src/templates/posts.js`);

    edges.forEach(({ node }) => {
        const postId = node.frontmatter.id;
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
}

const createPageOfCategory = (createPage) => (categoryNode) => {
    const categoriesTemplateComponent = path.resolve(`src/templates/categories.js`);
    
    const createPageOfCategoryNode = (categoryNode) => {
        const name = categoryNode.name;
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

    createPageOfCategoryNode(categoryNode);

}

exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions;

    const result = await graphql(`
        {
            allMarkdownRemark(
                sort: { order: DESC, fields: [frontmatter___date] }
                limit: 1000
            ) {
                edges {
                    node {
                        frontmatter {
                            id
                        }
                    }
                }
            }
        }
    `);

    // Handle errors
    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    createPageOfPost(createPage)(result.data.allMarkdownRemark.edges);

    createPageOfCategory(createPage)(CATEGORY);
};
