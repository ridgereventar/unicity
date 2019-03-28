import React, { Component } from 'react';
import $ from 'jquery';
import { BrowserRouter, Route, Link } from "react-router-dom";
import '../styles/Account.css';
// components
import Header from '../components/Header';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';

// pages
import Anncmnts from './Anncmnts';
import Projects from './Projects';
import Films from './Films';
import Events from './Events';
import Create from './Create';

export const UserContext = React.createContext();

class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [], 
            activeuser: this.props.location.state.activeuser
        }
    }
    componentDidMount() {
        $.get("api/users", (data) => {
            this.setState({users: data});
        });
    }
    openDrawer = () => {
        console.log("open drawer!");
        $('.block-cover').css({'opacity':'0.2', 'pointer-events':'all'});
        $('.drawer-container').css('pointer-events', 'all');
        $('.drawer').css({'transition':'0.5s', 'right':'0'});
        $('body').css('overflow','hidden');
    }
    hideDrawer = () => {
        $('.block-cover').css({'opacity':'0.0', 'pointer-events':'none'});
        $('.drawer-container').css('pointer-events', 'none');
        $('.drawer').css({'transition':'0.5s', 'right':'-250px'});
        $('body').css('overflow','visible');

    }

    render() {         
        return (  
            <UserContext.Provider value={{users: this.state.users, activeuser: this.state.activeuser}}>
                <BrowserRouter>
                    <div onClick={this.hideDrawer} className="block-cover"></div>
                    <div className="drawer-container">
                        <div className="drawer">
                            <div className="drawer-header">
                                <h1>{this.state.activeuser.fname}</h1>
                                <h1>{this.state.activeuser.lname}</h1>
                            </div>
                            <div className="drawer-content">
                                <ul>
                                    <li><Link onClick={this.hideDrawer} to="/account/create">CREATE A PROJECT</Link></li>
                                    <li id="account-link">ACCOUNT</li>
                                    <li>LOG OUT</li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <Header openDrawer={this.openDrawer}/>
                    
                    <NavBar/>
                    
                    <Route path="/account/announcements" component={Anncmnts}></Route>
                    <Route path="/account/projects" component={Projects}></Route>
                    <Route path="/account/films" component={Films}></Route>
                    <Route path="/account/events" component={Events}></Route>
                    <Route path="/account/create" component={Create}></Route>

                    <Footer/>
                </BrowserRouter>
            </UserContext.Provider>
            
            
            
        );
    }
}
 
export default Account;