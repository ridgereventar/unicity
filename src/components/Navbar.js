import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <div className="nav-container">
            <ul>
                <li><a><Link to="/account/announcements">ANNOUNCEMENTS</Link></a></li>
                <li><a><Link to="/account/projects">CLUB PROJECTS</Link></a></li>
                <li><a><Link to="/account/films">FINISHED FILMS</Link></a></li>
                <li><a><Link to="/account/events">EVENT CALENDAR</Link></a></li>
            </ul>
        </div>
    );
    
};

export default Navbar;