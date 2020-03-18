import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/presentaitional/Layout";
import SEO from "../components/container/Seo";
import MainRecentPosts from '../components/presentaitional/MainRecentPosts';

export default ({ data }) => {
    const posts = data.allMarkdownRemark.edges;

    return (
        <Layout>
            <SEO
                title="home"
            />
            hi
    
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
                                fluid(maxWidth: 800) {
                                    ...GatsbyImageSharpFluid
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
