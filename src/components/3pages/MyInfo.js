import React from 'react';
import './Pages.css';
import Icons from './SocialIcons';



export default function MyInfo() {
    return (
        <div className='myInfo'>
            <div className='heading'>My Info</div>
            <div className='myInfo-item'>
                <div className='info-pic'></div>
                <h2>Abhishek <span>Pandey</span></h2>
                <p>I'm a Web Developer</p>
                <div className='info-social-link'>
                    <Icons />
                </div>
                <p className=''>Address : Alpha 1st , Greater Noida</p>
                <p className=''>(Uttar Pradesh) , India</p>
                
            </div>
        </div>
    )
}
