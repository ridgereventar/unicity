import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery'

import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.css';
  
import App from './components/App';

ReactDOM.render(<App />, document.getElementById('root'));

// testing jquery code:
$(document).ready(function() {

    /*
    Parallax Scrolling effect provided by Lau Tiam Kok, from CodeMentor.io at:
    https://www.codementor.io/lautiamkok/js-tips-creating-a-simple-parallax-scrolling-with-css3-and-jquery-efp9b2spn
    */
    var scrolled = $(window).scrollTop()
    $('.backgroundImages').each(function(index) {

        var initY = $(this).offset().top
        var height = $(this).height()
        var diff = scrolled - initY
        var ratio = Math.round((diff / height) * 100)
        $(this).css({
            'background-position': 'center ' + parseInt(-(ratio * 2.5)) + 'px',
            'height': height,
            'max-width': '100%'
        })
    })


    $(window).scroll(function() {
        var scrolled = $(window).scrollTop()
        $('.backgroundImages').each(function(index, element) {
            var initY = $(this).offset().top
            var heightfinal = $(this).height()
            var endY = initY + $(this).height()

            var visible = isInViewport(this)
            if (visible) {
                var diff = scrolled - initY
                var ratio = Math.round((diff / heightfinal) * 100)
                $(this).css({
                    'background-position': 'center ' + parseInt(-(ratio * 2.5)) + 'px',
                    'height': heightfinal,
                    'max-width': '100%'
                })
            }
        })
    })

    function isInViewport(node) {
        var rect = node.getBoundingClientRect()
        return (
            (rect.height > 0 || rect.width > 0) &&
            rect.bottom >= 0 &&
            rect.right >= 0 &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.left <= (window.innerWidth || document.documentElement.clientWidth)
        )
    }
});