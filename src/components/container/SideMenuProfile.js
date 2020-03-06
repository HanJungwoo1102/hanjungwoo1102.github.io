import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import ProfileImg from './ProfileImg';

export default () => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <div>
            <div>{data.site.siteMetadata.title}</div>
            <ProfileImg/>
        </div>
    );
};
