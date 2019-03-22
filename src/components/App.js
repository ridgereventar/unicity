import React, { Component } from 'react';
import $ from 'jquery';
import '../styles/App.css';

import Header from './Header';
import Navbar from './Navbar';
import Carousel from './Carousel';
import Anncmnts from './Anncmnts';
import Question from './Question';
import Footer from './Footer';

class App extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // $.ajax({
  }

  render() {

    return (
      <div className="App">
        <Header></Header>
        <Navbar></Navbar>
        <Carousel></Carousel>
        <Anncmnts></Anncmnts>
        <Question></Question>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
