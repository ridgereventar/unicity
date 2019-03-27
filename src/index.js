import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.css';
  
import App from './components/App';

ReactDOM.render(<App />, document.getElementById('root'));

// testing jquery code:
$(document).ready(function() {

    $(".splash-logo").delay(100).fadeIn(1000);
    $(".splash_title_main").delay(100).fadeIn(1000);
    $(".click_to_begin").delay(1000).fadeIn("slow", function() {});

    

    $(window).click(function fadeSplash() {
        $(".splash_background").fadeOut("slow");
        $(".splash").fadeOut("slow", function() {});
        $(".splash_title").delay(600).fadeOut("slow", function() {});
        $(".splash-logo").delay(600).fadeOut("slow", function() {});
        $(".click_to_begin").fadeOut("slow");

        $(".backgroundImages").delay(100).fadeIn(1000);
        $(".message").delay(1600).fadeIn(1000);
        $(".nav_bar").delay(1600).fadeIn(1000);
        $(".footer").delay(1600).fadeIn(1000);
    })


    /*
    Parallax Scrolling effect provided by Lau Tiam Kok, from CodeMentor.io at:
    https://www.codementor.io/lautiamkok/js-tips-creating-a-simple-parallax-scrolling-with-css3-and-jquery-efp9b2spn
    */
    var scrolled = $(window).scrollTop()
    $('.backgroundImages').each(function(index) {
        var image = $(this).attr('src')
        var imageHeight = $(this).data('height')
        $(this).css('background-image', 'url(' + image + ')')
        $(this).css('height', imageHeight)

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