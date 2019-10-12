import React from 'react';
import { projectList } from '../data/resume';

const Projects = () => {
    let projects = projectList.map((project) => {
        return (
            <div className="project shadow-large">
            <div className="project-image">
                <img src={require("../images/projects/"+project.image)} alt={ project.name } width="240" height="200"/>
            </div>
        
            <div className="project-info">
               <a className="btn btn-primary" href={ project.link } target = "_blank"> <h3>{ project.name }</h3> </a>
                <p>
                    { project.description }
                </p>
            </div>
            
            </div>
        );

    });  
    return (
    <div id="projects" className="projects">
        { projects }
    </div>
    );
}

export default Projects