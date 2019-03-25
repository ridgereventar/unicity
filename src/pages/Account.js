import React, { Component } from 'react';
import $ from 'jquery';
import { BrowserRouter, Route, Link } from "react-router-dom";

// components
import Header from '../components/Header';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';


// pages
import Anncmnts from './Anncmnts';
import Projects from './Projects';
import Films from './Films';
import Events from './Events';

export const UserContext = React.createContext();

class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [], 
            activeuser: {},
        }
    }
    componentDidMount() {
        $.get("api/users", (data) => {
            this.setState({users: data});
            $.each(data, (key, value) => {
                if(value.username === 'afgantalpur') {
                    this.setState({activeuser: value});
                }
            });
        });
    }

    render() {         
        return (  
            <UserContext.Provider value={{users: this.state.users, activeuser: this.state.activeuser}}>
                <BrowserRouter>
                    <Header/>
                    <NavBar/>
                    
                    <Route path="/account/announcements" component={Anncmnts}></Route>
                    <Route path="/account/projects" component={Projects}></Route>
                    <Route path="/account/Films" component={Films}></Route>
                    <Route path="/account/Events" component={Events}></Route>

                    <Footer/>
                </BrowserRouter>
            </UserContext.Provider>
            
            
            
        );
    }
}
 
export default Account;