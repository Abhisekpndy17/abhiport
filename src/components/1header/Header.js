import React, { Component } from 'react'
import './Header.css';
import {NavLink} from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div className='header'>
                <nav>
                    <div className='logo'><NavLink to='/' className='link'>AbhiShek</NavLink></div>
                    <ul className='navLinks'>
                        <li><NavLink to='/about-us' className='link' activeClassName='OnActiveClass'>about-us</NavLink></li>
                        <li><NavLink to='/works' className='link' activeClassName='OnActiveClass'>work</NavLink></li>
                    </ul>
                    
                </nav>
        </div>
        )
    }
}
