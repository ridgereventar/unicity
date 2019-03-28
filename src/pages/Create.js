import React, { Component } from 'react';
import '../styles/Create.css';

class Create extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="create-container">
                <div className="create-form-container">
                    <h1 id="proj-form-label">New Project Idea</h1>

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

                </div>
            </div>
        );
    }
}
 
export default Create;