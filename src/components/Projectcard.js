import React, { Component } from 'react';
import $ from 'jquery';

class Projectcard extends Component {
    constructor(props) {
        super(props);
    }


    showPending(id) {
        $(`#star${id}`).css({'transition':'1s', 'top': '35px'});
        $(`#msg${id}`).delay(600).fadeIn(1000);
    }

    render() { 
        // console.log("id", this.props.id);
        return (
            <div className="card-container" style={{'backgroundImage': `url(${require('../assets/proj1.jpg')})`}}>
                <div className="pending-star-container">
                    <div id={`star${this.props.id}`} className="pending-star"></div>
                </div>
                <small id={`msg${this.props.id}`} className="req-pending-msg">Request Pending</small>
                <h1 id="proj-name">{this.props.projObj.projectname}</h1>
                <h3 className="proj-font-base">{this.props.projObj.creator}</h3>
                <p className="proj-font-base">{this.props.projObj.description}</p>
                <h3 className="proj-font-base">Looking for: {this.props.projObj.lookingfor}</h3>
                <p className="proj-font-base">Contributors: {this.props.projObj.members}</p>
                <button onClick={this.showPending.bind(this, this.props.id)} id="request-join-btn">Request to join</button>
    
            </div>
        );    
    }
}


export default Projectcard;





