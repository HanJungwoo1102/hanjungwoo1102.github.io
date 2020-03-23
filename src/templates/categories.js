import React from 'react';
import { graphql } from "gatsby"

import Layout from "../components/presentaitional/layout/Layout";
import SEO from "../components/container/Seo";

import { getPostObjectByEdge } from '../lib/mapping-object';
import RecentPosts from '../components/presentaitional/pages/categories/RecentPosts';
import Header from '../components/presentaitional/pages/categories/Header';

export default ({ data, pageContext }) => {
    const posts = data.allMarkdownRemark.edges.map(getPostObjectByEdge);
    const name = pageContext.name;

    return (
        <Layout>
            <SEO
                title={`Category - ${name}`}
            />

            <Header name={name} />      
            <RecentPosts posts={posts} />
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
                                original {
                                    src
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
