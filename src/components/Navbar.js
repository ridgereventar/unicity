import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <div className="nav-container">
            <ul>
                <li><Link to="/account/announcements">ANNOUNCEMENTS</Link></li>
                <li><Link to="/account/projects">CLUB PROJECTS</Link></li>
                <li><Link to="/account/films">FINISHED FILMS</Link></li>
                <li><Link to="/account/events">EVENT CALENDAR</Link></li>
            </ul>
        </div>
    );
    
};

export default Navbar;