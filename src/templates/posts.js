import React, { useCallback, useMemo, useEffect, useState } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from '../components/presentaitional/Layout';
import SEO from "../components/container/Seo";
import FixedRightSideBar from "../components/presentaitional/FixedRightSideBar";
import MarkdownAutoLink from "../components/container/MarkdownAutoLink";
import RelatedPosts from "../components/presentaitional/RelatedPosts";
import PostContainer from "../components/presentaitional/PostContainer";

export default ({ data }) => {
    const {
        markdownRemark: {
            frontmatter,
            html,
            excerpt
        },
        allMarkdownRemark: {
            edges,
        },
    } = data;
    const [scrollTop, setScrollTop] = useState(null);

    const relatedPostList = useMemo(() => {
        return edges.map((edge) => {
            const { id, title } = edge.node.frontmatter;
            return {
                id,
                title,
            };
        }) 
    }, [edges]);

    const scrollHandler = useCallback(() => {
        const newScrollTop = window.scrollY || document.documentElement.scrollTop;
        setScrollTop(newScrollTop);
    }, []);

    const isShowContents = scrollTop > 0;

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);
    }, []);

    return (
        <Layout>
            <SEO
                title={frontmatter.title}
                description={excerpt}
            />

            <PostContainer
                title={frontmatter.title}
                date={frontmatter.date}
                image={frontmatter.image}
                frontmatter={frontmatter}
                html={html}
                isShowContents={isShowContents}
            />

            <FixedRightSideBar>
                <MarkdownAutoLink />
                <RelatedPosts relatedPostList={relatedPostList}/>
            </FixedRightSideBar>
        </Layout>
    );
};

export const pageQuery = graphql`
    query($postId: Int!, $relatedPostIds: [Int!]!) {
        markdownRemark(frontmatter: { id: { eq: $postId } }) {
            html
            excerpt(pruneLength: 160)
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
        }
        allMarkdownRemark(filter: {frontmatter: {id: {in: $relatedPostIds}}}) {
            edges {
                node {
                    frontmatter {
                        id
                        title
                    }
                }
            }
        }
    }
`;
