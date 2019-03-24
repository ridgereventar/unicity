import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.css';
  
import App from './components/App';

ReactDOM.render(<App />, document.getElementById('root'));


// testing jquery code:
$(function() {
    $('.testdiv').css({'width':'100%', 'height':'300px', 'background-color':'red'})
});
