import React from 'react';
import { graphql } from "gatsby"

import Layout from "../components/layout/presentaitional/Layout";
import PostPreview from "../components/presentaitional/PostPreview";
import SEO from "../components/container/Seo";

import { CategoryContentsWrapper } from '../components/styled/CenteredContentsWrapper';

import { getPostObjectByEdge } from '../lib/mapping-object';

export default ({ data, pageContext }) => {
    const posts = data.allMarkdownRemark.edges.map(getPostObjectByEdge);
    const name = pageContext.name;

    return (
        <Layout>
            <SEO
                title={`Category ${name}`}
            />
            <CategoryContentsWrapper>
                <div>Category</div>
                <div>{name}</div>
        
                {
                    posts.map((post) => {
                        return (
                            <PostPreview
                                id={post.id}
                                title={post.title}
                                date={post.date}
                                description={post.description}
                                key={post.id}
                                image={post.image}
                            />
                        );
                    })
                }
            </CategoryContentsWrapper>
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
