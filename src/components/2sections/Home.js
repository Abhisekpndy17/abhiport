import React from 'react';
import './Home.css';
import MyInfo from '../3pages/MyInfo';
import AboutOne from '../3pages/AboutOne';


export default function Home() {
    return (
        <div className='home'>
            <div className='hero'>
                <div className='hero-container one'>
                    <MyInfo />
                    
                </div>
                <div className='hero-container two'>
                    <AboutOne />
                </div>
            </div>
        </div>
    )
}
