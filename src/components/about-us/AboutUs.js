import React from 'react';
import './AboutUs.css';
import AboutusOne from '../2sections/Home';
import Skills from '../3pages/Skills';

export default function AboutUs() {
    return (
        <div>
            <div className='About-heading'>about-us</div>
            <AboutusOne />
            <div className='about-hero'>
                <Skills />
            </div>
        </div>
    )
}
