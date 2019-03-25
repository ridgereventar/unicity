import React, { Component } from 'react';

const Projectcard = (props) => {

    return (
        <div className="card-container"
            style={{'background-image': `url(${require('../assets/proj1.jpg')})`}}>
            <h1 id="proj-name">Unnatural Selection</h1>
            <h3 className="proj-font-base">Created By: Afgan Talpur</h3>
            <p className="proj-font-base">Description: Welcome to Universe City Film Club! 
                We are extrememly excited to begin a new journey 
                with all of you. Our first club meeting will be held on March.23rd 
                at UA2340.  Welcome to Universe City Film Club! We are extrememly 
                excited to begin a new journey with all of you. Our first club meeting 
                will be held on March.23rd at UA2340.  
            </p>
            <h3 className="proj-font-base">Looking for: Editors, actors/actresses, photographer</h3>
            <p className="proj-font-base">Contributors: Ridge (editor), Kyle (actor), Ashley (actress), 
                Afgan (dirtector), Dom (editor), Etienne (videographer)
            </p>
            <button id="request-join-btn">Request to join</button>

        </div>
    );
    
};

export default Projectcard;





