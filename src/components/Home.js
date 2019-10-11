import React from 'react';
import { aboutMe } from '../data/resume';

const Home = (props) => {

    let summary = props.summary.map((line) => {
        return (
            <p>
                {line}
            </p>
        );
    });

        return (
            <div id="lead" className="Home">
                <div id="lead-content" className = "container">
                    <h1>{ props.name }</h1>
                    <h2>{ props.address }</h2>
                    { summary }
                </div>
                <div id="lead-overlay"></div>
                
                    
            
            </div>
        );
};

export default Home