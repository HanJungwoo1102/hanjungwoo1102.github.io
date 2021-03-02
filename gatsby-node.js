const createHomePage = require('./gatsby-src/page-creator/create-home-page');
const createPostPages = require('./gatsby-src/page-creator/create-post-pages')

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  await createHomePage(createPage, graphql, reporter);
  await createPostPages(createPage, graphql, reporter);
};
