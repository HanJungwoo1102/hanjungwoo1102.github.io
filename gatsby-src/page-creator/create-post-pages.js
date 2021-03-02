module.exports = async (createPage, graphql, reporter) => {
  const postPageTemplate = require.resolve('../../src/page-template/Post.tsx');

  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html,
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
    const { frontmatter, html } = node;
    const { title, date, id, description, main_image } = frontmatter;

    const post = {
      id,
      title,
      dateString: date,
      description,
      mainImageUrl: main_image,
      html,
    };

    posts.push(post);
  });

  posts.forEach((post) => {
    createPage({
      path: `posts/${post.id}`,
      component: postPageTemplate,
      context: {
        post,
      },
    });
  })
};
