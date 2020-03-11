/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const host = 'hanjungwoo1102.github.io';

module.exports = {
    /* Your site config here */
    siteMetadata: {
        title: 'HanJungwoo',
        description: 'Han Jungwoo Blog',
        author: '@HanJungwoo',
        siteUrl: `https://${host}`,
    },
    plugins: [
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'posts',
                path: `${__dirname}/posts/`,
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'resources',
                path: `${__dirname}/resources/`,
            },
        },
        {
            resolve: 'gatsby-plugin-sharp',
        },
        {
            resolve: 'gatsby-transformer-sharp',
        },
        {
            resolve: 'gatsby-transformer-remark', // gatsby-source-filesystem 뒤에 와야함.
            options: {
                plugins: [
                    {
                        resolve: 'gatsby-remark-images',    // margin down 내 image 넣기 위해 추가
                        options: {
                            maxWidth: 730,
                        }
                    },
                    {
                        resolve: 'gatsby-remark-autolink-headers',
                        options: {
                            className: 'markdown-header-auto-link',
                        }
                    },
                    {
                        resolve: `gatsby-remark-vscode`,
                        options: {
                            theme: 'Dark+ (default dark)', // Read on for list of included themes. Also accepts object and function forms.
                        },
                    },
                ]
            }
        },
        {
            resolve: 'gatsby-plugin-react-helmet',
        },
        {
            resolve: 'gatsby-plugin-smoothscroll',
        },
        {
            resolve: 'gatsby-plugin-sitemap',
        },
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                host: `https://${host}`,
                sitemap: `https://${host}/sitemap.xml`,
                policy: [{ userAgent: '*', allow: '/' }],
            }
        },
        {
            resolve: `gatsby-plugin-styled-components`,
        },
    ]
};
