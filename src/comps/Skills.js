import React, { Component } from 'react'
import SkillsList from './SkillsList';

export class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            renderChoice : 'Front End'
        }
        this.changeSkillDisplay = this.changeSkillDisplay.bind(this);
        
        console.log(this.state);
      }

    static defaultProps = {
        frontEnd : [
            {
                name: 'HTML',
                image: <i class="fab fa-html5"></i>,
                id: 1
            },

            {
                name: 'CSS',
                image: <i class="fab fa-css3-alt"></i>,
                id: 2
            },

            {
                name: 'JavaScript',
                image: <i class="fab fa-js-square"></i>,
                id: 3
            },

            {
                name: 'Bootstrap',
                image: <i class="fab fa-bootstrap"></i>,
                id: 4
            },

            {
                name: 'React',
                image: <i class="fab fa-react"></i>,
                id: 5
            }
        ],

        backEnd : [
            {
                name: 'NodeJS',
                image: <i class="fab fa-node"></i>,
                id: 1
            },

            {
                name: 'Express (NodeJS routing framework)',
                image: <i class="fab fa-node-js"></i>,
                id: 2
            },

            {
                name: 'MongoDB (JSON based/Non SQL database)',
                image: <i class="fab fa-node-js"></i>,
                id: 3
            },

            {
                name: 'PHP (Currently learning)',
                image: <i class="fab fa-php"></i>,
                id: 4
            },

            {
                name: 'C# (Currently learning)',
                id: 5
            }
        ]
    };

    changeSkillDisplay(b){
        this.setState(
            {renderChoice : b.target.value}
        )
      console.log(this.state.renderChoice)
    }

    render() {

        const  frontEndSkills = this.props.frontEnd.map((skill, key) => 
               <li key={skill.id}> {skill.image} <p>{skill.name}</p> </li>
            );
        
        const  backEndSkills = this.props.backEnd.map((skill, key) => 
               <li key={skill.id}> {skill.image} <p>{skill.name}</p> </li>
            );

        return (
            <div>
                <h1 className='display-1 title'>Skills List</h1>

                <button type='button' class='btn btn-outline-danger' onClick={this.changeSkillDisplay} value='Front End'>Front End Skills</button>
                <button type='button' class='btn btn-outline-danger' onClick={this.changeSkillDisplay} value='Back End'>Back End Skills</button>
                
                <SkillsList frontEnds={frontEndSkills} backEnds={backEndSkills} render={this.state.renderChoice}/>
            </div>
        )
    }
}

export default Skills
