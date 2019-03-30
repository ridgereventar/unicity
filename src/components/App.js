import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import '../styles/App.css';

// Pages: 
import Home from '../pages/Home';
import Account from '../pages/Account';
import Login from '../pages/Login';
import Signup from '../pages/Signup';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/login" component={Login}/>
          <Route path="/account" component={Account}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
