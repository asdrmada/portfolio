import React, { Component } from 'react';
import timerScreenshot from '../images/TTscreenshot.jpg';
import blogScreenshot  from '../images/ABCAscreenshot.jpg';
import './Projects.css'

export class Projects extends Component {
    render() {
        return (
            <div>
                <h1 className='display-1 title'>Projects List</h1>
                <div className='project'>
                  <h3 className='display-3'>Tap Timer</h3>
                  <img src={ timerScreenshot } alt='Tap Timer Screenshot'></img>
                </div>

                <div className='project'>
                  <h3 className='display-3'>Alex's Bizarre Coding Adventure</h3>
                  <img src={ blogScreenshot } alt='Tap Timer Screenshot'></img>
                </div>

            </div>
        )
    }
}

export default Projects
