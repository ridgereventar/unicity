import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

import Home from '../pages/Home';

class Banner extends Component {
    constructor(props) {
        super(props);
    }

    toHome = () => {
        this.props.history.push('/');
    }

    render() { 
        return (
            <BrowserRouter>
                <Link id="banner-nav-link" to="/">
                    <div className="banner-container">
                        <div onClick={this.toHome} className="banner-logo-container"> 
                            <img src={require('../assets/splashlogo.png')}></img>
                        </div>
                        <h1 onClick={this.toHome}>UNIVERSE CITY FILM CLUB</h1>
                    </div>
                </Link>
                
                <Route path="/" exact component={Home}/>
            </BrowserRouter>
            
        );
            
    }
}

export default Banner;





