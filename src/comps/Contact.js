import React, { Component } from 'react'

export class Contact extends Component {
    render() {
        return (
            <div>
                <h1 className='display-1 title'>Contact Details</h1>

                <h4 className='display-4'>Email</h4>
                <p>newmanalexander92@gmail.com</p>

                <a href='https://github.com/asdrmada'><i class="fab fa-4x fa-github"></i></a>

                <a href='https://www.linkedin.com/in/alexander-newman-a63572182/'><i class="fab fa-4x fa-linkedin"></i></a>

                <a className='display-6' href='coderlist.io/profile/asdrmada'>coderlist.io</a>
            </div>
        )
    }
}

export default Contact
