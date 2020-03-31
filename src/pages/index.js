import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/presentaitional/layout/Layout";
import SEO from "../components/container/Seo";
import MainRecentPosts from '../components/presentaitional/pages/main/MainRecentPosts';
import MainCover from '../components/presentaitional/pages/main/MainCover';

import { getPostObjectByEdge } from '../lib/mapping-object';

export default ({ data }) => {
    const posts = data.allMarkdownRemark.edges.map(getPostObjectByEdge);

    return (
        <Layout>
            <SEO
                title="home"
            />
            
            <MainCover />
            <MainRecentPosts posts={posts} />
        </Layout>
    );
};

export const pageQuery = graphql`
    query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
                node {
                    frontmatter {
                        id
                        date(formatString: "MMMM DD, YYYY")
                        title
                        image {
                            childImageSharp {
                                original {
                                    src
                                }
                            }
                        }
                    }
                    excerpt(pruneLength: 180)
                }
            }
        }
    }
`
