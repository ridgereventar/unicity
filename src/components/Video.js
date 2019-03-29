import React, { Component } from 'react';

import {UserContext} from '../pages/Account';

const Video = (props) => {

    return (
        <div className="video-container"> 
            <iframe width="810" height="560" src={props.embedurl} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>       
        </div>
    );

};

export default Video;





