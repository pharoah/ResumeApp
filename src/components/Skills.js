import React from 'react';

import { skillList } from '../data/resume';

const Skills = (props) => {

    let skills_list = skillList.map((skill) => {
        if(skill.type === 'fonts'){
            return (
                <div className = "list-category mb3">
                <h2 className = "mb-3"> { skill.name } </h2>
                <ul className = "list-inline">
                    { skill.fonts.map((font)=>
                        {
                            return (
                                        <li className = "list-inline-item">
                                            <i className = { font } ></i> 
                                        </li>
                                     );
                        })
                    }      
                </ul> 
                </div>  
            );
        }

        else if(skill.type === 'icons'){
            return (
                <div className = "list-category mb3">
                <h2 className = "mb-3"> { skill.name } </h2>
                <ul className = "list-inline">
                    { skill.icons.map((icon)=>{
                            return (
                                <li className = "list-inline-item">
                                    <img src={ require("../images/svg/"+icon) } width="64" height="64"/>
                                </li>
                            );
                        }) }
                        
                </ul>
                </div>
            );
        }

        else {
            return (
                <div className = "list-category mb3"> 
                <h2 className = "mb-3"> { skill.name } </h2>
                <ul className = "list-group row">
                    { skill.topics.map((topic)=>{
                        return (
                            <li className = "list-group-item col-xs-6 col-sm-4 col-md-3">
                            { topic } 
                            </li>
                        );
                    }) }
                 </ul>
                 </div>
                 
            );
        }

    });



    return (
    <div id = "skills" className="container row">
    
         { skills_list }
    </div>
    );
};
    


export default Skills