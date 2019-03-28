import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink } from "react-router-dom";

import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <div className="nav-container">
            <ul>
                <li><NavLink className="nav-link" activeStyle={{ color: '#C89F3C' }} to="/account/announcements"  style={{ textDecoration: 'none' }}>ANNOUNCEMENTS</NavLink></li>
                <li><NavLink className="nav-link" activeStyle={{ color: '#C89F3C' }} to="/account/projects" style={{ textDecoration: 'none' }}>CLUB PROJECTS</NavLink></li>
                <li><NavLink className="nav-link" activeStyle={{ color: '#C89F3C' }} to="/account/films" style={{ textDecoration: 'none' }}>FINISHED FILMS</NavLink></li>
                <li><NavLink className="nav-link" activeStyle={{ color: '#C89F3C' }} to="/account/events" style={{ textDecoration: 'none' }}>EVENT CALENDAR</NavLink></li>
            </ul>
        </div>
    );
    
};

export default Navbar;