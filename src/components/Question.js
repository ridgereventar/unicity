import React, { Component } from 'react';
import $ from 'jquery';

import '../styles/Question.css';

class Question extends Component {

    handleSubmit = (event) => {
        event.preventDefault();
        $('#question-form')[0].reset();
        $('#question-sent-msg').fadeIn(1000);
        $('#question-sent-msg').delay(1000).fadeOut(500);

    }
    render() { 
        return (
            <div className="question-container">
                <h1 id="questions-label">Questions?</h1>
                <form id="question-form" onSubmit={this.handleSubmit}>
                    <textarea id="question-text-area" placeholder="Let us know!"></textarea>
                    <label id="question-sent-msg"> Question has been sent </label>
                    <input id="question-send-button" type="submit" value="SEND" />

                </form>
            </div>
        );    
    }
}
 

export default Question;