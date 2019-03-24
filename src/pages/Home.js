import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

import Login from './Login';
import Projects from './Projects';

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <BrowserRouter>
                <h1 id="homeid">Home</h1>
                <div className="testdiv">

                </div>
            </BrowserRouter>
                

            
            
        );
    }
}
 
export default Home;