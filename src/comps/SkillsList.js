import React, { Component } from 'react'


export class SkillsList extends Component {
    constructor(props) {
        super(props);

        console.log(this.props)
      }

    render() {

      const showSkills = this.props.render === 'Front End';

        return (
            <div>
                <ul>
                {showSkills ? (
                  <div>
                    <h3 className='display-3'>Front End Skills</h3>
                    {this.props.frontEnds}
                  </div>
                ) : (
                  <div>
                    <h3 className='display-3'>Back End Skills</h3>
                    {this.props.backEnds}
                  </div>
                )}
                </ul>
                
            </div>
        )
    }
}

export default SkillsList
