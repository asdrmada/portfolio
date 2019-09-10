import React, { Component } from 'react';
import timerScreenshot from '../images/TTscreenshot.jpg';
import blogScreenshot  from '../images/ABCAscreenshot.jpg';
import './Projects.css'

export class Projects extends Component {
    render() {
        return (
            <div>
                <h1 className='display-1 title'>Projects</h1>
                <div className='containter project'>
                  <h3 className='display-3'>Tap Timer</h3>
                  <img src={ timerScreenshot } alt='Tap Timer Screenshot'></img>
                  <p className='lead'>
                    A functional Martial Arts/excerise round timer built with HTML, CSS and vanilla JavaScript.
                    Built as my first project.
                  </p>
                  <div className='links'>
                   <a href='https://lit-refuge-58849.herokuapp.com/'><button type='button' class='btn btn-outline-danger' value=''>View Project</button></a>
                   <a href='https://github.com/asdrmada/tap-timer'><button type='button' class='btn btn-outline-danger' value=''>View Repository</button></a>
                  </div>
                </div>

                <div className='conatiner project'>
                  <h3 className='display-3'>Alex's Bizarre Coding Adventure</h3>
                  <img src={ blogScreenshot } alt='ABCA Screenshot'></img>
                  <p className='lead'>
                    A blog site using NodeJS with Express and MongoDB Atlas for backend technologies.
                  </p>
                  <div className='links'>
                   <a href='https://quiet-waters-27315.herokuapp.com/blogs/1/'><button type='button' class='btn btn-outline-danger' value=''>View Project</button></a>
                   <a href='https://github.com/asdrmada/ABCAsource'><button type='button' class='btn btn-outline-danger' value=''>View Repository</button></a>
                  </div>
                </div>

            </div>
        )
    }
}

export default Projects
