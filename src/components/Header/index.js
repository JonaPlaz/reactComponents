// == Import npm
import React from 'react';

// == Import
import './header.scss';

// let's see .scss to choose classnames - Delete classnames you don't want
const Header = () => (
    <header className="header">
        <h1><a href="#">Title</a></h1>
        <nav>
            <a href="#">About Us</a>
            <a href="#">Content</a>
            <a href="#">Join Us</a>
        </nav>
    </header>
)


export default Header;
