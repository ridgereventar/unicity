import React, { Component } from 'react';

const Banner = (props) => {

    return (
        <div className="banner-container">
            <div className="banner-logo-container"> 
                <img src={require('../assets/splashlogo.png')}></img>
            </div>
            <h1>UNIVERSE CITY FILM CLUB</h1>
        </div>
    );
    
};

export default Banner;





