import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const Customlink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link className='underline decoration-4  hover:decoration-[#000066] '
                style={{ color: match ? "blue" : "white" }}
                to={to}
                {...props}
            >
                {children}
            </Link>

        </div >
    );
};

export default Customlink;