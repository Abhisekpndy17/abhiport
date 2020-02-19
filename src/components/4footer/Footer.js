import React from 'react';
import './Footer.css';
import SocialLinks from '../3pages/SocialIcons';
import Address from '../3pages/Address';
import ContactUs from '../3pages/ContactUs';

export default function Footer() {
    return (
        <footer>
            <div className='footer-item'>
                <Address />
            </div>
            <div className='footer-item'>
                <ContactUs />
            </div>
            <div className='footer-item'>
            <SocialLinks />
            </div>
        </footer>
    )
}
