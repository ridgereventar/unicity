import React, { Component } from 'react';
import $ from 'jquery';

import '../styles/Signup.css';
import Banner from '../components/Banner';
import Popup, { showSuccess, showError } from '../components/Popup';

const scrollToTop = () => {
    const scroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (scroll > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, scroll - scroll / 100);
    }
};

class Signup extends Component {
    constructor(props) {
        super(props); 

        this.state = { 
            firstName: null, 
            lastName: null, 
            email: null, 
            userName: null, 
            password: null, 
            phone: "",
            formErrors: {
                firstName: "", 
                lastName: "", 
                emailaddr: "", 
                userName: "", 
                password: "",  
            }
        }
    }
   
    componentDidMount() {
        scrollToTop();            
    }

    formValid = ({formErrors, ...rest}) => {
        let valid = true;
        Object.values(formErrors).forEach(val => {
            if(val.length > 0) {
                valid = false;
            }
        });

        Object.values(rest).forEach(val => {
            if(val === null) { 
                valid = false;
            }
        })
        return valid;
    }

    handleChange = (event) => {
        event.preventDefault();
        const {name, value} = event.target;
        let formErrors = this.state.formErrors;

        // Form validation
        switch(name) {
            case 'firstName':
                formErrors.firstName = value.length == 0 ? 'field is empty' : '';
                break; 
            case 'lastName':
                formErrors.lastName = value.length == 0 ? 'field is empty' : '';
                break; 
            case 'email':
                const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
                formErrors.emailaddr = emailRegex.test(value) && value.length > 0 ? '' : 'invalid email address';
                break; 
            case 'userName':
                formErrors.userName = value.length < 3 ? 'minimum 3 characters' : '';
                break;
            case 'password':
                formErrors.password = value.length < 6 ? 'minimum 6 characters': '';
                break; 

            default: 
                break;
        }

        this.setState({formErrors, [name]: value}, () => console.log(this.state));
        
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if(this.formValid(this.state)) {
            showSuccess();
            const newuser = {
                fname: this.state.firstName, 
                lname: this.state.lastName, 
                email: this.state.email, 
                username: this.state.userName, 
                password: this.state.password, 
                phone: this.state.phone
            }
            // post new account to /api/users
            $.ajax({
                type: "POST",
                url: '/api/users', 
                data: newuser
            })
            // go to login page
            this.props.history.push({
                pathname: '/login', 
                state: {success: true}
            })
        } else {
            showError();
        }
    }

    render() { 
        return (
            <React.Fragment>
                <Banner/>
                <div className="signup-popup-container">
                    <Popup id="error" msg="Missing required fields"></Popup>
                </div>
                
                <div className="signup-container">
                    
                    <div className="form-container">
                        <h1>Sign up</h1>
                        <form 
                            onSubmit={this.handleSubmit} 
                            className="signup-form">
                            <div className="inline-container">
                                <div className="form-name-label-container">
                                    <label className="inline-label" htmlFor="fname">First Name</label>
                                    <label className="inline-label label-secondchild" htmlFor="lname">Last Name</label>
                                </div>
                                <div className="form-name-input-container">
                                    <input 
                                        className="inline-input" 
                                        type="text" 
                                        id="fname"
                                        placeholder="John"
                                        name="firstName"
                                        onChange={this.handleChange}/>
                                    <input 
                                        className="inline-input input-secondchild" 
                                        type="text" 
                                        id="lname"
                                        placeholder="Doe"
                                        name="lastName"
                                        onChange={this.handleChange}/>
                                </div>
                            </div>
                            <div className="error-msg-container">
                                {this.state.formErrors.firstName.length > 0 && (
                                    <span className="error-msg">{this.state.formErrors.firstName}<br></br></span>
                                )}
                                {this.state.formErrors.lastName.length > 0 && (
                                    <span className="error-msg err-msg-second">{this.state.formErrors.lastName}<br></br></span>
                                )}
                            </div>
                        
                            <label id="email-label" htmlFor="email-input">Email</label>
                            <input 
                                className="fullwidth-input" 
                                type="email" 
                                id="email-input"
                                placeholder="john.doe@uoit.net"
                                name="email"
                                onChange={this.handleChange}/>
                            {this.state.formErrors.emailaddr.length > 0 && (
                                <span className="error-msg">{this.state.formErrors.emailaddr}<br></br></span>
                            )}
                            
                            <div className="inline-container">
                                <div className="form-name-label-container">
                                    <label className="inline-label" htmlFor="username">Username</label>
                                    <label className="inline-label label-secondchild" htmlFor="password">Password</label>
                                </div>
                                <div className="form-name-input-container">
                                    <input 
                                        className="inline-input" 
                                        type="text" 
                                        id="username"
                                        placeholder="johndoe"
                                        name="userName"
                                        onChange={this.handleChange}/>
                                    <input 
                                        className="inline-input input-secondchild" 
                                        type="password" 
                                        id="password"
                                        placeholder="johndoe123"
                                        name="password"
                                        onChange={this.handleChange}/>
                                </div>
                            </div>
                            <div className="error-msg-container">
                                {this.state.formErrors.userName.length > 0 && (
                                    <span className="error-msg">{this.state.formErrors.userName}<br></br></span>
                                )}
                                {this.state.formErrors.password.length > 0 && (
                                    <span className="error-msg err-msg-second">{this.state.formErrors.password}<br></br></span>
                                )}
                            </div>

                            <label id="phone-label" htmlFor="phone">Phone (optional)</label>
                            <input 
                                type="text" 
                                id="phone"
                                placeholder="905 999 9999"
                                name="phone"
                                onChange={this.handleChange}/>
                            
                            <input id="submit-btn" type="submit" value="SIGN UP" />

                        </form>
                        
                    </div>
                </div>
                {/* <Footer></Footer> */}
            </React.Fragment>
        );
    }
}
 
export default Signup;