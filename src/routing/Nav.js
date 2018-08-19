import React from 'react';
import { Link } from "react-router-dom";
import { withRouter } from 'react-router';

export default () => (
    <ul>
        <li>
            <Link to="/">Dashboard Page</Link>
        </li>
        <li>
            <Link to="/session">Session Page</Link>
        </li>
    </ul>
);