import React, { Component } from 'react';
import $ from 'jquery';
import '../styles/Login.css';

import Banner from '../components/Banner';
import Popup, { showSuccess, showError } from '../components/Popup';

// If user scrolled down in previous page, Login will render with scroll up 
// animation to display banner
const scrollToTop = () => {
    const scroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (scroll > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, scroll - scroll / 100);
    }
};

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signinsuccess: false,  
            username: null,         
            password: null,
            formErrors: {
                userName: "",
                password: ""
            }
        }
    }

    componentDidMount() {
        scrollToTop(); 
        if(this.props.location.state.success) {
            showSuccess();
        }           
    }

    handleSubmit = (event) => {
        event.preventDefault(); 
        if(this.formValid(this.state)) {
            const user = { 
                username: this.state.userName,
                password: this.state.password
            }
            // AJAX: check if user exits. 
            $.get("api/users", (data) => {
                $.each(data, (key, value) => {
                    if(value.username === this.state.username && value.password === this.state.password) {
                        // Send user object to account
                        this.props.history.push({
                            pathname: '/account/announcements', 
                            state: {activeuser: value}
                        })
                    } else {
                        showError();
                    }
                });
            });
        } else {
            showError();
        }
    }

    formValid = ({formErrors, ...rest}) => {
        // if formErrors empty and state values != null, form is valid
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

        // Form Validation: 
        switch(name) {
            case 'username':
                formErrors.userName = value.length < 3 ? 'minimum 3 characters' : '';
                break;
            case 'password':
                formErrors.password = value.length < 6 ? 'minimum 6 characters': '';
                break;
            default: 
                break;
        }

        // Assigns each changed field to the state
        this.setState({formErrors, [name]: value}, () => console.log(this.state));
        
    }

    toSignup = () => {
        this.props.history.push({
            pathname: '/signup'
        })
    }

    render() { 
        return ( 
            <React.Fragment>
                <Banner/>
                <div className="signup-popup-container">
                    <Popup id="success" msg="Sign up successful!"></Popup>
                    <Popup id="error" msg="User does not exist"></Popup>
                </div>

                <div className="login-container"> 
                    <div className="login-form-container">
                        <h1>Login</h1>
                        <form onSubmit={this.handleSubmit}>
                            <label className="login-label" htmlFor="username">Username</label>
                            <input 
                                className="fullwidth-input" 
                                type="text" 
                                id="username"
                                placeholder="johndoe"
                                name="username"
                                onChange={this.handleChange}/> 
                            {this.state.formErrors.userName.length > 0 && (
                                <span className="error-msg">{this.state.formErrors.userName}</span>
                            )}
                            <label className="login-label" htmlFor="password">Password</label>
                            <input 
                                className="fullwidth-input" 
                                type="text" 
                                id="password"
                                placeholder="johndoe123"
                                name="password"
                                onChange={this.handleChange}/>
                            {this.state.formErrors.password.length > 0 && (
                                <span className="error-msg">{this.state.formErrors.password}</span>
                            )}

                            <input id="submit-btn" type="submit" value="LOGIN" />
                            <input id="submit-btn" type="button" value="SIGN UP" onClick={this.toSignup} style={{'marginTop': '10px'}} />

                        </form> 
                    </div>
                </div>
            </React.Fragment>
            
        );
    }
}
 
export default Login;