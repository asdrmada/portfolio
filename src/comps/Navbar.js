import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export class Navbar extends Component {
    render() {
        return (
            <div>
              <nav className='navbar navbar-expand-lg navbar-dark bg-dark justify-content-center'>
                <a className='navbar-brand' href='/'><i class="fas fa-code"></i></a>
                
                <button 
                className='navbar-toggler'
                type='button'
                data-toggle='collapse'
                data-target='#navbarNav'
                aria-controls='navbarNav'
                aria-expanded='false'
                aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarNav'>
                    <ul className='navbar-nav'>
                        <NavLink to='/about' className='nav-link'>About</NavLink>
                        <NavLink to='/skills' className='nav-link'>Skills</NavLink>
                        <NavLink to='/projects' className='nav-link'>Projects</NavLink>
                        <NavLink to='/contact' className='nav-link'>Contact</NavLink>
                    </ul>
                </div>
              </nav>
            </div>
        )
    }
}

export default Navbar
