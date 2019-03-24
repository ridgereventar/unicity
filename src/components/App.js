import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import $ from 'jquery';
import '../styles/App.css';

// Pages: 
import Home from '../pages/Home';
import Account from '../pages/Account';

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
        <Route path="/" exact component={Home}></Route>
        <Route path="/account" component={Account}></Route>
      </BrowserRouter>
    );
  }
}

export default App;
