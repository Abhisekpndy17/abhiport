import React from 'react';
import './Pages.css';
import Html from '../images/html.png';
import JavaScript from '../images/javascript.png';
import Css from '../images/css.png';
import ReactIcon from '../images/react.png';
import Node from '../images/node.png';
import Git from '../images/git.png';

export default function Skills() {
    return (
        <div className='Skills-containers'>
            <div className='skill-heading'> My Web Development Skills</div>
            <div className='skill-items'>
                <div className='skill-content'>
                <div className='skill-language'>
                    <div className='skill-img'>
                    <img src={Html} alt='dddd'/>
                    </div>
                    <div className='skills'>HTML</div>
                </div>
                <div className='skill-language'>
                    <div className='skill-img'>
                    <img src={Css} alt='dddd'/>
                    </div>
                    <div className='skills'>CSS</div>
                </div>
                <div className='skill-language'>
                    <div className='skill-img'>
                    <img src={JavaScript} alt='dddd'/>
                    </div>
                    <div className='skills'>JavaScript</div>
                </div>
                <div className='skill-language'>
                    <div className='skill-img'>
                    <img src={ReactIcon} alt='dddd'/>
                    </div>
                    <div className='skills'>ReactJS</div>
                </div>
                <div className='skill-language'>
                    <div className='skill-img'>
                    <img src={Node} alt='dddd'/>
                    </div>
                    <div className='skills'>NodeJS</div>
                </div>
                <div className='skill-language'>
                    <div className='skill-img'>
                    <img src={Git} alt='dddd'/>
                    </div>
                    <div className='skills'>GIT & Github</div>
                </div>
                </div>
            </div>
        </div>
    )
}
