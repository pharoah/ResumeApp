import React from 'react';
import { experienceList } from '../data/resume';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

const Experience = (props) => {

    let work_history = experienceList.map((work)=>{
        return(
            <TimelineItem
                 key={ work.id }
                 dateText={ work.duration }
                 style={{ color: '#217dbb' }}
                 
                >
                <h3>{ work.job_title }</h3>
                <h4>{ work.company }</h4>
                
                <p>
                    <ul className="list-group">
                        { work.job_duties.map((duty)=>{
                            return (
                                <li className="list-group-item"> { duty }  </li>

                            );
                        }) }
                       
                    </ul>
                </p>
            </TimelineItem>

        );
    });

    return (
      
        <Timeline lineColor={'#ddd'} className = "experience-timeline">
            

            { work_history }
            
            
        </Timeline>
        
    );
   
};
    

export default Experience