import React, { Component } from 'react';
import { SkillsList } from './SkillsList';
import './Projects.css'

export class Projects extends Component {
    render() {
        return (
            <div>
                <h1 className='display-1 title'>Projects List</h1>

                <SkillsList></SkillsList>

            </div>
        )
    }
}

export default Projects
