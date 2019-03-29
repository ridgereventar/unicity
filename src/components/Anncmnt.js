import React, { Component } from 'react';
import '../styles/Anncmnt.css';

const Anncmnt = (props) => {
    return (
        <React.Fragment>
        <div className="anncmnt-item">
            <h3 style={{'textTransform':'uppercase'}}>{props.annObj.title}</h3>
            <p>{props.annObj.content}</p>
        </div>
        <div className="author-container">
            <div className="author-account-info">
                <small id="author-name"> - {props.annObj.author} ({props.annObj.role})</small>
            </div>
        </div>
        <div className="divider"></div>
        </React.Fragment>
    );
};

export default Anncmnt;