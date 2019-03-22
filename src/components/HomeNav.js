import React, { Component } from 'react';
import $ from 'jquery';
import '../styles/HomeNav.css';


class HomeNav extends Component {
    state = {
        width: 0
    }    

    render() {
        return (
            <div className="homenav-container">
                <div id="mySidenav" className="sidenav" style={{'width': {this.state.width}}}>
                    <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}></a>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Clients</a>
                    <a href="#">Contact</a>
                </div>
    
                <h2>Animated Sidenav Example</h2>
                <p>Click on the element below to open the side navigation menu.</p>
                <span style={ {'fontSize':'30px' , 'cursor':'pointer' }} onClick={this.openNav}>&#9776; open</span>
            </div>
        );
    };
    
    openNav = () => {
        $('#mySidenav').prop('width', '250px');
        console.log($('#mySidenav').prop('background-color'));
    };
    closeNav = () => {
        $('#mySidenav').prop('width', '0px');
    };

};


export default HomeNav;