const { createFilePath } = require(`gatsby-source-filesystem`)

const { PageCreator, createTagMap } = require('./src/lib/create-page.js');

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
                            tags
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

    const posts = result.data.allMarkdownRemark.edges.map((edge) => {
        const { id, tags } = edge.node.frontmatter;
        return {
            id,
            tags,
        };
    });

    const pageCreator = PageCreator(createPage, posts);

    pageCreator.createPageOfPost();
    pageCreator.createPageOfCategory();
    pageCreator.createPageOfTag();

};

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
        const value = createFilePath({ node, getNode })
        createNodeField({
            name: `slug`,
            node,
            value,
        });
    }
};

exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions;
    const typeDefs = `
        type Tag {
            name: String!
            postIds: [Int!]!
        }
    `;

    createTypes(typeDefs);
};

exports.createResolvers = ({ createResolvers }) => {
    const resolvers = {
        Query: {
            allTags: {
                type: "[Tag!]!",
                resolve(source, args, context, info) {
                    const posts = context.nodeModel.getAllNodes({ type: 'MarkdownRemark' }).map((node) => {
                        const { id, tags } = node.frontmatter;
                        return {
                            id,
                            tags,
                        };
                    });

                    const tagMap = createTagMap(posts);

                    return Object.entries(tagMap).map(([tagName, postIdsInTag]) => {
                        return {
                            name: tagName,
                            postIds: postIdsInTag,
                        };
                    });
                },
            },
        },
    };

    createResolvers(resolvers);
};
