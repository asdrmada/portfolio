import React from 'react';
import FrontPage from './comps/FrontPage';
import About from './comps/About';
import Skills from './comps/Skills';
import Projects from './comps/Projects';
import Contact from './comps/Contact';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from './comps/Navbar';

function App() {
  return ( 
    <div className = "App" >
        <Navbar/>
      <div className = 'container'>
      <Switch>
        <Route exact path='/'         render={() => <FrontPage/>}/>
        <Route exact path='/about'    render={() => <About/>}/>
        <Route exact path='/skills'   render={() => <Skills/>}/>
        <Route exact path='/projects' render={() => <Projects/>}/>
        <Route exact path='/contact'  render={() => <Contact/>}/>
      </Switch>
      </div>
    </div>
  );
}

export default App;