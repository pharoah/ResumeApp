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
                <h3>{ project.name }</h3>
                <p>
                    { project.description }
                </p>
                <a className="btn btn-primary" href={ project.link } target = "_blank" className="badge badge-info">View Project</a>
            </div>
            
            </div>
        );

    });

  
    return (
    <div id="projects" className="projects background-alt">
        { projects }
    </div>
    );
}

export default Projects