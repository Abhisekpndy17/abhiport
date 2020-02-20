import React, { Component } from 'react'
import './Header.css';
import {NavLink} from 'react-router-dom';
import Menu from '../images/menu.png';
import Cross from '../images/multi.png';

export default class Header extends Component {
    state= {
        isOpen : true,
    }

    render() {
        return (
            <div className='header'>
                <nav>
                    <div className='logo'><NavLink to='/' className='link'>AbhiShek</NavLink></div>
                    <ul className={this.state.isOpen ? "navLinks" : "navLinks open"}>
                        <li><NavLink to='/about-us' className='link' activeClassName='OnActiveClass'>about-us</NavLink></li>
                        <li><NavLink to='/works' className='link' activeClassName='OnActiveClass'>work</NavLink></li>
                    </ul>
                    <div 
                        className='hamburger'
                        onClick={()=>this.setState({isOpen: !this.state.isOpen})} 
                    >
                    <div className={this.state.isOpen ? "line" : "line close"}>
                    </div>
                    </div>
                    
                </nav>
        </div>
        )
    }
}
