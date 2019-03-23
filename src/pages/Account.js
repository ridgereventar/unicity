import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

// components
import Header from '../components/Header';
import NavBar from '../components/Navbar';
import Carousel from '../components/Carousel';
import Question from '../components/Question';
import Footer from '../components/Footer';

// pages
import Anncmnts from './Anncmnts';

class Account extends Component {
    render() { 
        return (  
            <BrowserRouter>
                <Header/>
                <NavBar></NavBar>
                <Carousel></Carousel>
                <Anncmnts></Anncmnts>
                <Question></Question>
                <Footer></Footer>

            </BrowserRouter>
            
            
        );
    }
}
 
export default Account;