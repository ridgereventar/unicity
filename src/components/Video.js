import React, { Component } from 'react';

import {UserContext} from '../pages/Account';

const Video = (props) => {

    return (
        <div className="video-container"> 
            <iframe width="560" height="315" src={props.embedurl} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>       
        </div>
    );
    
};

export default Video;





