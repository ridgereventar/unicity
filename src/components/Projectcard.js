import React, { Component } from 'react';

const Projectcard = (props) => {

    return (
        <div className="card-container"
            style={{'backgroundImage': `url(${require('../assets/proj1.jpg')})`}}>
            <h1 id="proj-name">{props.projObj.projectname}</h1>
            <h3 className="proj-font-base">{props.projObj.creator}</h3>
            <p className="proj-font-base">{props.projObj.description}</p>
            <h3 className="proj-font-base">Looking for: {props.projObj.lookingfor}</h3>
            <p className="proj-font-base">Contributors: {props.projObj.members}</p>
            <button id="request-join-btn">Request to join</button>

        </div>
    );
    
};

export default Projectcard;





