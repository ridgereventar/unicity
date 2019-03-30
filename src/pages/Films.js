import React, { Component } from 'react';
import '../styles/Films.css';

import Video from '../components/Video';

class Films extends Component {
    constructor(props) {
        super(props); 
        this.state = { 
            urls: [
                "https://www.youtube.com/embed/L2bKK5i5804", 
                "https://www.youtube.com/embed/5PhGe6ZBu6g",
                "https://www.youtube.com/embed/CR-0viYyWAA",
                "https://www.youtube.com/embed/jXM6zMvN4a0",
                "https://www.youtube.com/embed/mSCDAcnHa4w"
            ]
        }
    }
    render() { 
        return (  
            <div className="films-page-container">    
                {this.state.urls.map((url, i) => (
                    <Video key={i} embedurl={url}></Video>
                ))}.
            </div>

        );
    }
}
 
export default Films;