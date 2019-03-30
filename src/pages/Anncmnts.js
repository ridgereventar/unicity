import React, { Component } from 'react';
import $ from 'jquery';
import '../styles/Anncmnts.css';


import Carousel from '../components/Carousel';
import Anncmnt from '../components/Anncmnt';
import Question from '../components/Question';

class Anncmnts extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      announcements: []
    }
  }
  
  componentDidMount() {
    // Fetch all announcements from database
    $.get("api/announcements", (data) => {
      this.setState({announcements: data});
    });

  }

  render() {
    return (
      <React.Fragment>
        <Carousel/>
        <div className="anncmnts-container">
            <div className="anncmnts-content">
                <h2 className="annc-title">Announcements</h2>
                {this.state.announcements.map((ann,i) => (
                  <Anncmnt key={i} annObj={ann}></Anncmnt>
                ))}
            </div>
        </div>
        <Question/>
      </React.Fragment>

    );
  }
}

export default Anncmnts;
