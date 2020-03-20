import React from 'react';
import { useStaticQuery, graphql } from "gatsby"

import SideMenuProfile from '../presentaitional/layout/side-menu/SideMenuProfile';

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
        <SideMenuProfile title={data.site.siteMetadata.title}/>
    );
};
