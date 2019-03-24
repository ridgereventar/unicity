import React, { Component } from 'react';
import '../styles/Header.css';
import {CoursesContext} from './App';

const Header = (props) => {

    return (
        <div className="header"> 
            <div className="header-title-container">
                <div className="logo-container">
                    <img id="logo-img" src={require('../assets/logo2.png')}></img>
                </div>
                <small className="unicity-title">UNIVERSE CITY FILM CLUB</small>
            </div>
            <div className="header-account-container">
                <div className="account-info">
                    <small id="account-name">Ridge Reventar</small>
                    <br></br>
                    <small id="account-status">member</small>
                </div>
                <div className="photo-container">
                    <div className="circle-container" style={ {backgroundImage:`url(${require('../assets/ridgepic.png')})`} }>
                    </div>
                </div>
            </div>
          

        </div>
    );
    
};

export default Header;





