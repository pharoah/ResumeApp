import React from 'react';
import {NavLink} from 'react-router-dom';

const toggleMenu = ()=> {
    let mobileMenu = document.getElementById("menu");
        mobileMenu.classList.toggle('active')
    let headerMenu = document.getElementById("headerMenu");
        headerMenu.classList.toggle('active')
        
}
const Navbar = (props) => {

    return (
        <nav>
                <div id="mobile-menu-open" class="shadow-large" onClick= { toggleMenu }>
                     <i class="fa fa-bars" aria-hidden="true" ></i>
                 </div>
            
            <header id="headerMenu">
                <div id="mobile-menu-close" onClick= { toggleMenu }>
                    <span>Close</span> <i class="fa fa-times" aria-hidden="true"></i>
                </div>
               
                <ul id="menu" class="shadow">
                    
                    <li>
                        <NavLink className = "nav-menu-link" activeClassName = "clicked" exact to="/">About</NavLink>
                    </li>
                    <li>
                        <NavLink className = "nav-menu-link" activeClassName = "clicked" to="/skills">Skills</NavLink>
                    </li>
                    <li>
                        <NavLink className = "nav-menu-link" activeClassName = "clicked" to="/experience">Experience</NavLink>
                    </li>
                    <li>
                        <NavLink className = "nav-menu-link" activeClassName = "clicked" to="/education">Education</NavLink>
                    </li>
                    <li>
                        <NavLink className = "nav-menu-link" activeClassName = "clicked" to="/projects">Projects</NavLink>
                    </li>
                    
                  
                    <li>
                        <a href={"mailto:"+props.email} target="_blank"><i class="fas fa-at" aria-hidden="true"></i></a>
                    </li>
                    <li>
                        <a href={ props.github } target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a>
                    </li>
                    
                    <li>
                        <a href={ props.linkedin } target="_blank"><i class="fab fa-linkedin" aria-hidden="true"></i></a>
                    </li>
                    
                    
                    
                </ul>
            </header>
        </nav> 
        );
    }

export default Navbar