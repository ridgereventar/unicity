import React, { Component } from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <div id="gold-divider"></div>

            <div className="footer-content-container">
                <div id="footer-info-container">
                    <div className="footer-logo-container">
                        <img src={require('../assets/logodraft.png')}></img>
                        <p id="mission-text">Through gathering creators, local short films, and <br></br> showcase festivals 
                            we bring the thrills of Hollywood to UOIT.  
                        </p>
                    </div>
                    <div className="footer-info-container">
                        <a id="email">unicityfilmclub@gmail.com</a>
                        <br></br>
                        <a id="address">2000 Simcoe St N, Oshawa, ON</a>
                    </div>
                </div>
                <div id="thin-divider"></div>
                <div className="footer-links-container">
                    <small id="copyright-label">© 2019 Universe City Film Club</small>
                    <div className="icons-container">
                        <ul id="social-icons-list">
                            <a><img src={require('../assets/instaicon.png')}></img></a>
                            <a><img src={require('../assets/twittericon.png')}></img></a>
                            <a><img src={require('../assets/fbicon.png')}></img></a>
                            <a><img src={require('../assets/yticon.png')}></img></a>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
    
};

export default Footer;