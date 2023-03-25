import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h2>Welcome to my React Website</h2>
            <nav className='nav'>
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
                <a href="/login">Log in</a>

            </nav>
        </div>
    );
};

export default Header;