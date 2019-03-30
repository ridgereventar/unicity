import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import $ from 'jquery';
import '../styles/Home.css';

import Footer from '../components/Footer';
import Splash from '../components/Splash';

class Home extends Component {

    goToLogin = () => {
        $(".backgroundImages").fadeOut();
        $(".login-btn-container").fadeOut();
        $(".message").fadeOut();
        $(".footer").fadeOut();
        this.props.history.push({
            pathname: '/login', 
            state: {success: false}
        })
    }
    
    routeChange = () => {
        let path = '/signup';
        this.props.history.push(path);
    }

    render() { 
        return ( 
            <BrowserRouter>
                <Splash></Splash>

                <div className="backgroundImages" id="bg1">
                    <div className="login-btn-container" onClick={this.goToLogin}>
                    </div> 
                    <div className="title_position">
                        <div className="title">Universe City Film Club</div>
                        <div className="subtitle">For Students, By Students.</div>
                    </div>
                </div>

                <div className="message">
                    <div className="message_title">
                        Our Mission
                    </div>
                    <div className="message_content">
                        The Universe City Film Club's Mission is to bring the thrills of Hollywood to UOIT, through the following:
                        <ul className="message_list">
                            <li> Gathering creatives and artists from across the campus and providing a collaborative environment for them to share their work!</li>
                            <li> Filming a short film throughout the year by club members and having a premiere night to share our movie!</li>
                            <li> Hosting a student film festival to celebrate filmmakers from postsecondary schools across Canada!</li>
                        </ul>
                    </div>
                </div>

                <div className="backgroundImages" id="bg2" >
                    <div className="image_line">Create Short Films at UOIT</div>
                </div>

                <div className="message">
                    <div className="message_title">
                        Short Film
                    </div>
                    <div className="message_content">
                        Be a part of a short film right here at UOIT! Making a film requires a lot of work. You can help by:
                        <ul className="message_list">
                            <li> Coming up with ideas for the film and even help in writing it!</li>
                            <li> Taking a part in filming! Acting, working the camera, operating the boom pole, script supervision, etc.</li>
                            <li> Editing the film! No idea how to edit? No worries, we're here to help!</li>
                        </ul>
                        No experience required. We're all here to learn together!
                    </div>
                </div>

                <div className="backgroundImages" id="bg3" >
                    <div className="image_line">Learn Editing Software</div>
                </div>

                <div className="message">
                    <div className="message_title">
                        Editing Software
                    </div>
                    <div className="message_content">
                        Fellow student filmmakers and members of the club will help you learn about the process behind editing a film. <br></br>
                    </div>
                </div>

                <div className="backgroundImages" id="bg4">
                    <div className="image_line_join">
                        <div className="join">Join Today</div>
                    
                        <button type="button" name="join_button" className="join_button" onClick={this.routeChange}>Join Now</button>
                    </div>
                </div>

                <div className="footer">
                    <Footer></Footer>
                </div>


            </BrowserRouter>

        );
    }
}
 
export default Home;