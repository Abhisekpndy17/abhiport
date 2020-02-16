import React from 'react';
import './Pages.css';
import Html from '../images/html.png';
import Css from '../images/css.png';
import ReactIcon from '../images/react.png';
import Node from '../images/node.png';
import Git from '../images/git.png';

export default function Skills() {
    return (
        <div className='Skills-containers'>
            <div className='skill-heading'> My Web Development Skills</div>
            <div className='skill-items'>
            <div className='languages'>
                <div className='langIcons'>
            <img src={Html} alt='asaaa' /></div>
                <span>HTML </span>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus</p>
            </div>
            <div className='languages'>
            <div className='langIcons'>
            <img src={Css} alt='dfff' />
            </div>
                <span>CSS </span>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus</p>
            </div>
            <div className='languages'>
            <div className='langIcons'>
            <img src="https://img.icons8.com/color/96/000000/javascript.png" alt='fffff'/>
            </div>
                <span>JavaScript </span>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus</p>
            </div>
            <div className='languages'>
            <div className='langIcons'>
                <img src={ReactIcon} alt='sdfghj' />
            </div>
                <span>ReactJS </span>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus</p>
            </div>
            <div className='languages'>
            <div className='langIcons'>
            <img src={Node} alt='fgggsa'/>
            </div>
                <span>NodeJS </span>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus</p>
            </div>
            <div className='languages'>
            <div className='langIcons'>
            <img src={Git} alt='dffad' />
            </div>
                <span>Git || Github </span>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus</p>
            </div>
            </div>
        </div>
    )
}
