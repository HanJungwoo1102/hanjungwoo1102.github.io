const postTheme = require('../post-theme');
const POST_THEME = require('../post-theme');

module.exports = async (createPage, graphql, reporter) => {
  const homePageTemplate = require.resolve(`../../src/page-template/Home.tsx`);

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              id,
              title,
              date,
              description,
              main_image,
              post_theme_ids,
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

  const posts = [];

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const {
      title, date, id, description, main_image, post_theme_ids,
    } = node.frontmatter;

    const postThemeNames = [];

    if (post_theme_ids) {
      post_theme_ids.forEach((postThemeId) => {
        const findedPostTheme = POST_THEME.find(postTheme => postTheme.id === postThemeId);
        
        if (findedPostTheme) {
          postThemeNames.push(findedPostTheme.name);
        }
      });
    }

    posts.push({
      id,
      title,
      dateString: date,
      description,
      mainImageUrl: main_image,
      postThemeNames,
    })
  });

  createPage({
    path: '/',
    component: homePageTemplate,
    context: {
      posts,
    },
  });
};
