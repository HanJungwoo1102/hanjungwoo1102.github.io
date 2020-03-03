import React from 'react';
import { Link } from 'gatsby';

import { getPathOfCategory } from '../../lib/path';

export default ({ name, children }) => {
    return (
        <div>
            <Link to={getPathOfCategory(name)}>
                {name}
            </Link>
            { children }
        </div>
    );
};
