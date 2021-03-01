import React from 'react';
import {  } from "./Header.css";
import { } from "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

const Header = () => {
    return (
        <div className="container header">
            <ul>
                <li>
                    News
                </li>
                <li>
                    Match Center
                </li>
                <li>
                    Fixtures
                </li>
                <li>
                    Tickets
                </li>
                <li>
                    Team
                </li>
            </ul>
        </div>
    );
};

export default Header;