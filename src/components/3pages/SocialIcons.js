import React from 'react';
import './Pages.css';
import FaceBook from '../images/facebook.png';
import Twitter from '../images/twitter.png';
import Github from '../images/github.png';
import Linkedin from '../images/linkedin.png';
import Insta from '../images/instagram.png';

export default function SocialIcons() {
    return (
        <div className='Social-media'>
            <a 
            href='https://www.google.com/' 
            className='social-links-items'>
                <img src={Twitter} alt='sxxzaxz' />
            </a>
            <a 
            href='https://www.google.com/' 
            className='social-links-items'>
                <img src={Insta} alt='sxxzaxz' />
            </a>
            <a 
            href='https://www.google.com/' 
            className='social-links-items'>
                <img src={Linkedin} alt='sxxzaxz' />
            </a>
            <a 
            href='https://www.google.com/' 
            className='social-links-items'>
                <img src={FaceBook} alt='sxxzaxz' />
            </a>
            <a 
            href='https://www.google.com/' 
            className='social-links-items'>
                <img src={Github} alt='sxxzaxz' />
            </a>
        </div>
    )
}
