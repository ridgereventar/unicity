import React, { Component } from 'react';
import '../styles/Projects.css';

import Projectcard from '../components/Projectcard';

class Projects extends Component {
    state = {  }
    render() { 
        return (  
            <div className="projects-container">
                <h1 id="proj-label">Current Projects</h1>
                <Projectcard></Projectcard>
                <Projectcard></Projectcard>
                <Projectcard></Projectcard>

            </div>
        );
    }
}
 
export default Projects;