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
    const { title, date, id, description, main_image } = node.frontmatter;
    
    posts.push({
      id,
      title,
      dateString: date,
      description,
      mainImageUrl: main_image,
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
