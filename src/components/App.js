import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import $ from 'jquery';
import '../styles/App.css';

// Pages: 
import Home from '../pages/Home';
import Account from '../pages/Account';

class App extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // $.ajax({
  }

  render() {

    return (
      <BrowserRouter>
        <Route path="/" exact component={Home}></Route>
        <Route path="/account" component={Account}></Route>
      </BrowserRouter>
      
    );
  }
}

export default App;
