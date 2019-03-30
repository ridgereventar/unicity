import React, { Component } from 'react';
import $ from 'jquery';
import '../styles/index.css';

// CSS transitions
export const showSuccess = () => {
    $('#success').css({'transition':'0.5s', 'top':'0'});
    $('#success').delay(2500).queue(function (next) { 
        $(this).css({'transition':'0.5s', 'top':'-40px'}); 
        next(); 
    });
}

export const showError = () => {
    $('#error small').css({'color':'red'});
    $('#error').css({'transition':'0.5s', 'top':'0'});
    $('#error').delay(2500).queue(function (next) { 
        $(this).css({'transition':'0.5s', 'top':'-40px'}); 
        next(); 
    });
}

const Popup = (props) => {
    return ( 
        <div className="top-popup-msg-container">
            <div id={props.id} className="top-popup-msg">
                <small>{props.msg}</small>
            </div>
        </div> 
    );
}

export default Popup;



