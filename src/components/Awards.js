import React from 'react';
import { awards } from '../data/resume';
import { aboutMe } from '../data/resume';

const Awards = () => {

    let awardList = awards.awards.map((aw) => {
        return (
            <li className="list-group-item"> 
                <i class="fas fa-trophy"></i>
                <span>{ aw }</span>
            </li>
        );
    });
    
    let publicationList = awards.publications.map((pub) =>{
        return (
            <li className="list-group-item"> 
                <i class="fas fa-clipboard"></i>
                <span>{ pub }</span>
            </li>
        );

    });

    return (
            <div id="awards" className="Awards">
                <div id="awards-content" className = "container">
                    <h1>Publication</h1>
                    <hr />
                    <ul className="list-group">
                    { publicationList}
                    </ul>
                    
                
                    <h1>Awards</h1>
                     <hr />
                    <ul className="list-group">
                    { awardList}
                    </ul>
                    
                </div>
            </div>
        );
};

export default Awards