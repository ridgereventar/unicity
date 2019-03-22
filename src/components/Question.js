import React, { Component } from 'react';
import '../styles/Question.css';

const Question = () => {
    return (
        <div className="question-container">
            <h1 id="questions-label">Questions?</h1>
            <textarea id="question-text-area" placeholder="Let us know!"></textarea>
            <br></br>
            <button id="question-send-button">Send</button>
        </div>
    );
    
};

export default Question;