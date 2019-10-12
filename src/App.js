import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Awards from './components/Awards';

import { aboutMe } from './data/resume';

import './css/bootstrap.min.css';
import './css/styles.css';
import './libs/fontawesome-free/css/all.min.css';


class App extends Component {
  
  render(){
    return (
      <BrowserRouter>
      <div className="App">
      <Navbar email = { aboutMe.email } linkedin = { aboutMe.linkedin } github = { aboutMe.github }/>
      <Route exact path="/" render = {() => <Home name = { aboutMe.name } address = { aboutMe.address }
                                      summary = { aboutMe.summaryLines }/>}/> 
      <Route path="/experience" component = { Experience } />
      <Route path="/education" render = {() => <Education eduTitle = "University" certTitle = "Certificates"/>} />
      <Route path="/skills" render = {() => <Skills title = "Skills" />} />
      <Route path="/projects" component = { Projects } />
      <Route path="/awards" component = { Awards } />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
