import React, { Component, useContext } from 'react';
import $ from 'jquery';
import '../styles/Create.css';

import {UserContext} from '../pages/Account';
import Popup from '../components/Popup';
import {showSuccess, showError} from '../components/Popup';

class Create extends Component {
    
    constructor(props) {
        super(props); 
        this.state = { 
            activeuser: props.activeuser,
            projectname: null, 
            description: null, 
            lookingfor: "", 
            members: ""
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if(this.formValid()) {
            const creatorName = this.state.activeuser.fname + " " + this.state.activeuser.lname;
            const newproj = {
                projectname: this.state.projectname, 
                creator: creatorName,
                description: this.state.description, 
                lookingfor: this.state.lookingfor, 
                members: this.state.members
            }
            // ajax post to projects collection in mongo
            $.ajax({
                type: "POST",
                url: '/api/projects', 
                data: newproj
            })
            showSuccess();
            $('#create-proj-form')[0].reset();
        } else {
            showError();            
        }
    }

    formValid = () => {
        // if both project name and description are not null or "", form is valid.
        var valid = true;
        if(this.state.projectname === null || this.state.projectname === "" ||
            this.state.description === null || this.state.description === "") {
            valid = false;
        }
        console.log('valid:', valid);
        return valid;
    }

    handleChange = (event) => {
        event.preventDefault();
        const {name, value} = event.target;
        this.setState({[name]: value});
    }


    render() { 
        return ( 
            <div className="create-container">
            
                <Popup id="success" msg="Project idea has been posted!"></Popup>
                <Popup id="error" msg="Project name and description required"></Popup>

                <div className="create-form-container">
                    <h1 id="proj-form-label">New Project Idea</h1>
                    
                    <form id="create-proj-form" onSubmit={this.handleSubmit}>
                        <label htmlFor="projectname">Project Name</label>
                        <input 
                            className="fullwidth-input" 
                            type="text" 
                            id="projectname"
                            name="projectname"
                            onChange={this.handleChange}/>

                        <label htmlFor="description">Description</label>
                        <textarea 
                            className="fullwidth-input" 
                            type="text" 
                            id="description"
                            name="description"
                            onChange={this.handleChange}/>

                        <label htmlFor="lookingfor">Looking for (roles)</label>
                        <input 
                            className="fullwidth-input" 
                            type="text" 
                            id="lookingfor"
                            name="lookingfor"
                            onChange={this.handleChange}/>

                        <label htmlFor="members">Contributors</label>
                        <textarea 
                            className="fullwidth-input" 
                            type="text" 
                            id="members"
                            name="members"
                            onChange={this.handleChange}/>
                        
                        <input id="postidea-btn" type="submit" value="POST IDEA" />

                    </form>
                    
                </div>
            </div>
        );
    }
}

const withUserContext = (Component) => {
    return (props) => (
        <UserContext.Consumer> 
            {({activeuser}) => {
                return <Component {...props} activeuser={activeuser}/>
            }}
        </UserContext.Consumer>
    )
}

export default withUserContext(Create);

