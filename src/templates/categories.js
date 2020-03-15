import React from 'react';
import { graphql } from "gatsby"

import Layout from "../components/presentaitional/Layout";
import PostPreview from "../components/presentaitional/PostPreview";
import SEO from "../components/container/Seo";

export default ({ data, pageContext }) => {
    const posts = data.allMarkdownRemark.edges;
    const name = pageContext.name;

    return (
        <Layout>
            <SEO
                title={`Category ${name}`}
            />
            <div>Category</div>
            <div>{name}</div>
    
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
        </Layout>
    );
};

export const pageQuery = graphql`
    query($postIds: [Int!]!) {
        allMarkdownRemark(filter: {frontmatter: {id: {in: $postIds}}}) {
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
`;
