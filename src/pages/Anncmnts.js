import React, { Component } from 'react';
import '../styles/Anncmnts.css';

import Carousel from '../components/Carousel';
import Anncmnt from '../components/Anncmnt';
import Question from '../components/Question';

class Anncmnts extends Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    console.log("announcements rendered!");

    return (
      <React.Fragment>
        <Carousel/>
        <div className="anncmnts-container">
            <div className="anncmnts-content">
                <h2 className="annc-title">Announcements</h2>
                <Anncmnt></Anncmnt>
                <Anncmnt></Anncmnt>
                <Anncmnt></Anncmnt>
            </div>
        </div>
        <Question/>
      </React.Fragment>

    );
  }
}

export default Anncmnts;
