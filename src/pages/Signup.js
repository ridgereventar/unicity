import React, { Component } from 'react';

import '../styles/Signup.css';

class Signup extends Component {
    state = {  }
    render() { 
        return (
            <div className="signup-container">
                <div className="form-container">
                    <h1>Sign up</h1>
                    <form className="signup-form">
                        <div className="inline-container">
                            <div className="form-name-label-container">
                                <label className="inline-label" htmlFor="fname">First Name</label>
                                <label className="inline-label label-secondchild" htmlFor="lname">Last Name</label>
                            </div>
                            <div className="form-name-input-container">
                                <input className="inline-input" type="text" id="fname"></input>
                                <input className="inline-input input-secondchild" type="text" id="lname"></input>
                            </div>
                        </div>
                        <label id="email-label" htmlFor="email-input">Email</label>
                        <input className="fullwidth-input" type="email" id="email-input"></input>

                        
                        <div className="inline-container">
                            <div className="form-name-label-container">
                                <label className="inline-label" htmlFor="username">Username</label>
                                <label className="inline-label label-secondchild" htmlFor="password">Password</label>
                            </div>
                            <div className="form-name-input-container">
                                <input className="inline-input" type="text" id="username"></input>
                                <input className="inline-input input-secondchild" type="password" id="password"></input>
                            </div>
                        </div>

                        <label id="phone-label" htmlFor="phone">Phone (optional)</label>
                        <input type="text" id="phone"></input>
                        
                        <input id="submit-btn" type="submit" value="SIGN UP"/>

                    </form>
                    
                </div>
            </div>
        );
    }
}
 
export default Signup;