import React, { useCallback, useMemo, useEffect, useState } from "react"
import { graphql } from "gatsby"

import Layout from '../components/presentaitional/layout/Layout';
import SEO from "../components/container/Seo";
import FixedRightSideBar from "../components/presentaitional/common/FixedRightSideBar";
import MarkdownAutoLink from "../components/container/MarkdownAutoLink";
import PostContainer from "../components/presentaitional/pages/posts/PostContainer";
import RelatedPosts from "../components/container/pages/posts/RelatedPosts";

export default ({ data, pageContext }) => {
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
    const { postId } = pageContext;
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
    }, [scrollHandler]);

    useEffect(() => {
        if (isShowContents) {
            // 한 번 보여지면 계속 보여지게 하기 위해서 이벤트를 없앴다.
            window.removeEventListener('scroll', scrollHandler);
        }
    }, [isShowContents, scrollHandler]);

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
            {
                isShowContents &&
                <FixedRightSideBar>
                    <MarkdownAutoLink />
                    <RelatedPosts posts={relatedPostList} currentPostId={postId}/>
                </FixedRightSideBar>
            }
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
