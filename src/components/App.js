import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import $ from 'jquery';
import '../styles/App.css';

// Pages: 
import Home from '../pages/Home';
import Account from '../pages/Account';
import Login from '../pages/Login';
import Signup from '../pages/Signup';


export const CoursesContext = React.createContext();

class App extends Component {

  constructor(props) {
    super(props);
    // this.state = {
    //   courses: []
    // }
  }

  componentDidMount() {
    // $.get( "api/courses", (data) => {
    //   this.setState({courses: data})
    // });
  }

  render() {

    return (
      <BrowserRouter>
        <switch>
          <Route path="/" exact component={Home}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/login" component={Login}/>
          <Route path="/account" component={Account}/>
        </switch>
        
      </BrowserRouter>
    );
  }
}

export default App;
