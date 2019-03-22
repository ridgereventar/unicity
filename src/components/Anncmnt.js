import React, { Component } from 'react';
import '../styles/Anncmnt.css';

const Anncmnt = () => {
    return (
        <React.Fragment>
        <div className="anncmnt-item">
            <h3>FIRST CLUB MEETING</h3>
            <p>Welcome to Universe City Film Club! We are extrememly 
                excited to begin a new journey with all of you. Our 
                first club meeting will be held on March.23rd at UA2340.
            </p>
        </div>
        <div className="author-container">
            <div className="author-account-info">
                <small id="author-name"> - Ridge Reventar</small>
                <br></br>
                <small id="author-status">MEMBER</small>
            </div>
            <div className="author-circle-container" style={ {backgroundImage:`url(${require('../assets/ridgepic.png')})`} }> </div>
        </div>
        <div className="divider"></div>
        </React.Fragment>
    );
};

export default Anncmnt;