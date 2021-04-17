import React from 'react';
import NavBar from "./NavBar";

import { Link } from "react-router-dom";

function Header(props) {
    return (
        <header>
            <div className="header-container">
                <Link to={"/"}><h2>Shopping React-Redux</h2></Link>
                <NavBar />
            </div>
        </header>
    );
}

export default Header;
