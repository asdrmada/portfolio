import React, { Component } from 'react'

export class SkillsList extends Component {
    static defaultProps = {
        frontEnd : [
            {
                name: 'HTML',
                image: <i class="fab fa-html5"></i>
            }
        ]
    };

    render() {
        return (
            <div>
                <h2>{this.props.frontEnd.name}</h2>
                {this.props.frontEnd.image}
            </div>
        )
    }
}

export default SkillsList
