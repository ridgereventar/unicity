import React, { Component } from 'react';
import $ from 'jquery';
import '../styles/Home.css';
class Splash extends Component {

    componentDidMount() {
        $('.splash-title-container').css({opacity: 0, display: 'flex'}).animate({
            opacity: 1
        }, 2000);
        $('.click_to_begin').delay(1000).fadeIn();
    }

    hideSplash = () => {
        $('.splash_background').delay(100).fadeOut();
        $('.click_to_begin').fadeOut();
        $(".backgroundImages").show();
        $(".login-btn-container").fadeIn(2000);
        $(".message").show();
        $(".footer").show();
    }

    render() { 
        return ( 
            <React.Fragment>
                <div onClick={this.hideSplash} className="splash_background"> 
                    <div className="splash-title-container">
                            <div className="splash-logo"></div>
                            <h1 className="splash_title_main">UNIVERSE CITY FILM CLUB</h1>
                    </div>
                </div>
                <div onClick={this.hideSplash} className="click_to_begin">Click to Begin</div>
            </React.Fragment>
            
        );
    }
}
 
export default Splash;