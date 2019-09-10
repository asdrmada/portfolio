import React, { Component } from 'react'
import './Contact.css'

export class Contact extends Component {
    render() {
        return (
            <div className='contacts'>
                <h1 className='display-1 title'>Contact Details</h1>

                <div className='email'>
                    <h4 className='display-4 title'>Email</h4>
                    <h4>newmanalexander92@gmail.com</h4>
                </div>

                <h4 className='display-4 title'>Social Media</h4>
 
                <a href='https://github.com/asdrmada'><i class="fab fa-4x fa-github contact-links"></i></a>

                <a href='https://www.linkedin.com/in/alexander-newman-a63572182/'><i class="fab fa-4x fa-linkedin contact-links"></i></a>

                <a className='display-6' href='coderlist.io/profile/asdrmada'><h5>coderlist.io</h5></a>
            </div>
        )
    }
}

export default Contact
