import React from 'react';
import './Footer.css';
import SocialLinks from '../3pages/SocialIcons';

export default function Footer() {
    return (
        <footer>
            <div className='footer-item'></div>
            <div className='footer-item'>
                <SocialLinks />
            </div>
            <div className='footer-item'></div>
        </footer>
    )
}
