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
                    <h3 className="caption-title">The Beautiful Heist</h3>
                    <p className="caption-content">
                    A weird comedy focusing on a rap group trying to steal back the one 
                    copy of their album. It's random, it's different, it has a bunch of 
                    references to inside jokes, shows and movies we watched growing up, 
                    and other random pop culture references too.
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
                    <h3 className="caption-title">Unnatural Selection</h3>
                    <p className="caption-content">
                    The Freedom Cut, extended version com ing soon.Created for the Western 
                    Smartphone Film Festival. Awards: Best Mobile Film in Red Corner Film Festival, 
                    3rd Place in Western University Smartphone Film Festival, Viewer's Choice Award 
                    for Best Film in Western University Smartphone Film Festival.
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

