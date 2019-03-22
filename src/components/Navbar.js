import React, { Component } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <div className="nav-container">
            <ul>
                <li><a>MY PROJECTS</a></li>
                <li><a>CLUB PROJECT</a></li>
                <li><a>FINISHED FILMS</a></li>
                <li><a>EVENT CALENDAR</a></li>
            </ul>
        </div>
    );
    
};

export default Navbar;