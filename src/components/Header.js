import React, { Component } from 'react';
import '../styles/Header.css';

import {UserContext} from '../pages/Account';

const Header = (props) => {
    
    return (
        <div className="header"> 
            <div className="header-title-container">
                <div className="logo-container">
                    <img  id="logo-img" src={require('../assets/logo-dark.png')}></img>
                </div>
                <small className="unicity-title">UNIVERSE CITY FILM CLUB</small>
            </div>
            <div className="header-account-container">
                <div className="account-info">
                    <UserContext.Consumer>
                        {({activeuser}) =>
                            <React.Fragment>
                                <small id="account-name">{activeuser.fname} {activeuser.lname}</small>
                                <br></br>
                                <small id="account-status">{activeuser.role}</small>
                            </React.Fragment>
                        } 
                    </UserContext.Consumer>
                    
                </div>
                <div className="photo-container">
                    <div onClick={props.openDrawer} className="circle-container" >
                    </div>
                </div>
            </div>
          

        </div>
    );
    
};

export default Header;





