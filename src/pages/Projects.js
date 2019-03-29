import React, { Component } from 'react';
import $ from 'jquery';
import '../styles/Projects.css';

import Projectcard from '../components/Projectcard';

class Projects extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            projects: []
        }
    }

    componentDidMount() {
        $.get("api/projects", (data) => {
          this.setState({projects: data});
      });
    }

    render() { 
        return (  
            <div className="projects-container">
                <h1 id="proj-label">Current Projects</h1>
                {this.state.projects.map((proj, i) => (
                  <Projectcard key={i} id={i} projObj={proj}></Projectcard>
                ))}            
            </div>
        );
    }
}
 
export default Projects;