/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    siteUrl: 'https://hanjungwoo1102.github.io',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/posts`,
        name: `markdown-pages`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`, // source 뒤에 와야한다는디??
      options: {
        plugins: [`gatsby-remark-prismjs`,]
      }
    },
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-feed',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-robots-txt',
  ],
}
