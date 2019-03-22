import React, { Component } from 'react';
import $ from 'jquery'; 
import '../styles/Carousel.css';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel'

const myCarousel = () => {


    return (
        <Carousel id="mycarousel" indicators={false} interval={9000}>
            <Carousel.Item>
                <div className="caption-container">
                    <h3 className="caption-title">Universe City's TORONTO</h3>
                    <p className="caption-content">
                    TORONTO gives us glimpses of how two students struggle 
                    to navigate through their lives with hoodman professors, 
                    rude interviewers, and confused classmates. Welcome to Toronto. 
                    </p>
                    <button className="watch-button">Watch Video</button>
                </div>

                <div className="dark-filter"></div>      
                <video autoPlay loop muted>
                    <source src={require('../assets/vid1.mp4')}></source>
                </video>
            </Carousel.Item>
            <Carousel.Item>
                <div className="caption-container">
                    <h3 className="caption-title">Universe City's TORONTO</h3>
                    <p className="caption-content">
                    TORONTO gives us glimpses of how two students struggle 
                    to navigate through their lives with hoodman professors, 
                    rude interviewers, and confused classmates. Welcome to Toronto. 
                    </p>
                    <button className="watch-button">Watch Video</button>
                </div>
                <div className="dark-filter"></div>
                <video autoPlay loop muted>
                    <source src={require('../assets/vid2.mp4')}></source>
                </video>
            </Carousel.Item>
            <Carousel.Item>
                <div className="caption-container">
                    <h3 className="caption-title">Universe City's TORONTO</h3>
                    <p className="caption-content">
                    TORONTO gives us glimpses of how two students struggle 
                    to navigate through their lives with hoodman professors, 
                    rude interviewers, and confused classmates. Welcome to Toronto. 
                    </p>
                    <button className="watch-button">Watch Video</button>
                </div>
                <div className="dark-filter"></div>
                <video autoPlay loop muted >
                    <source src={require('../assets/vid3.mp4')}></source>
                </video>

            </Carousel.Item>
        </Carousel>
    );
    
};

export default myCarousel;

