import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/presentaitional/Layout";
import PostPreview from "../components/presentaitional/PostPreview";
import SEO from "../components/container/Seo";
import { PostContentsWrapper } from "../components/styled/CenteredContentsWrapper";

export default ({ data }) => {
    const posts = data.allMarkdownRemark.edges;

    return (
        <Layout>
            <SEO
                title="home"
            />
            hi
    
            <PostContentsWrapper>
                {
                    posts.map(({ node }) => {
                        return (
                            <PostPreview
                                id={node.frontmatter.id}
                                title={node.frontmatter.title}
                                date={node.frontmatter.date}
                                description={node.excerpt}
                                key={node.frontmatter.id}
                                imageFluid={node.frontmatter.image !== null ? node.frontmatter.image.childImageSharp.fluid : null}
                            />
                        );
                    })
                }
            </PostContentsWrapper>
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
                    excerpt(pruneLength: 280)
                }
            }
        }
    }
`
