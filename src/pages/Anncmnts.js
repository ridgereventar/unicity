import React, { Component } from 'react';
import '../styles/Anncmnts.css';

import Anncmnt from '../components/Anncmnt';

class Anncmnts extends Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    console.log("announcements rendered!");

    return (
        <div className="anncmnts-container">
            <div className="anncmnts-content">
                <h2 className="annc-title">Announcements</h2>
                <Anncmnt></Anncmnt>
                <Anncmnt></Anncmnt>
                <Anncmnt></Anncmnt>

            </div>
            
        </div>
    );
  }
}

export default Anncmnts;
