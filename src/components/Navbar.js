import React from 'react';
import {NavLink} from 'react-router-dom';

const toggleMenu = ()=> {
    let mobileMenu = document.getElementById("menu");
        mobileMenu.classList.toggle('active')
    let headerMenu = document.getElementById("headerMenu");
        headerMenu.classList.toggle('active')
        
}

const closeMenu = ()=> {
    let mobileMenu = document.getElementById("menu");
        if (mobileMenu.classList.contains("active")){
            mobileMenu.classList.remove('active');}
    let headerMenu = document.getElementById("headerMenu");
    if (headerMenu.classList.contains("active")){
        headerMenu.classList.remove('active');}
       
        
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
                        <NavLink className = "nav-menu-link" activeClassName = "clicked" exact to="/" onClick={ closeMenu }>About</NavLink>
                    </li>
                    <li>
                        <NavLink className = "nav-menu-link" activeClassName = "clicked" to="/skills" onClick={ closeMenu } >Skills</NavLink>
                    </li>
                    <li>
                        <NavLink className = "nav-menu-link" activeClassName = "clicked" to="/experience" onClick={ closeMenu }>Experience</NavLink>
                    </li>
                    <li>
                        <NavLink className = "nav-menu-link" activeClassName = "clicked" to="/education" onClick={ closeMenu }>Education</NavLink>
                    </li>
                    <li>
                        <NavLink className = "nav-menu-link" activeClassName = "clicked" to="/projects" onClick={ closeMenu }>Projects</NavLink>
                    </li>
                    
                  
                    <li>
                        <a href={"mailto:"+props.email} target="_blank" onClick={ toggleMenu } ><i class="fas fa-at" aria-hidden="true"></i></a>
                    </li>
                    <li>
                        <a href={ props.github } target="_blank" onClick={ toggleMenu }><i class="fab fa-github" aria-hidden="true" ></i></a>
                    </li>
                    
                    <li>
                        <a href={ props.linkedin } target="_blank" onClick={ toggleMenu }><i class="fab fa-linkedin" aria-hidden="true"></i></a>
                    </li>
                    
                    
                    
                </ul>
            </header>
        </nav> 
        );
    }

export default Navbar