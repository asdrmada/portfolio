import React, { Component } from 'react'


export class SkillsList extends Component {
    constructor(props) {
        super(props);

        console.log(this.props)
      }

    render() {
        return (
            <div>
                <ul>
                 <h3 className='display-3'>Front End Skills</h3>
                   {this.props.frontEnds}

                 <h3 className='display-2'>Back End Skills</h3>
                   {this.props.backEnds}
                </ul>
                <p>render check</p>
                
                
            </div>
        )
    }
}

export default SkillsList
