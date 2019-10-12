import React from 'react';
import { educationList, certificateList } from '../data/resume';

const Education = (props) => {

    let education = educationList.map((edu) => {
        return (
            <div className="education-block">
                <h3>{ edu.institute }</h3>
                <span className="education-date">{ edu.duration}</span>
                <h4> <b>{ edu.degree}</b> in { edu.course }</h4>
                
            </div>
        );

    });

    let certificate = certificateList.map((cert)=>{
        return (
            <div className="education-block">
                <h3>{ cert.title}</h3>
                <span className="education-date">{ cert.month }</span>
                <h4><a href={ cert.link } target="_blank">Verify</a></h4>
            </div>

        );
    });

    return (
            <div id="education" className="education row">
                
                <h2 className="heading">{ props.eduTitle }</h2>
                { education }
                
                
                <h2 className="heading">{ props.certTitle }</h2>
                { certificate }
                
            </div>
             );
};
    


export default Education