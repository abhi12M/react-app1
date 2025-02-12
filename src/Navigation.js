import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/state">State</Link>
                </li>
                <li>
                    <Link to="/list">List</Link>
                </li>
                <li>
                    <Link to="/form">Form</Link>
                </li>
                <li>
                    <Link to="/parent/33">Parent</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
