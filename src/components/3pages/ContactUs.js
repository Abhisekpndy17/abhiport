import React from 'react';
import './Pages.css';
import Email from '../images/email.png';
import Hours from '../images/hours.png';

export default function ContactUs() {
    return (
        <div className='contact-us'> 
            <div className='contact-us-container'>
                <div className='Contact-item'>
                <div className='Contact-it'>
                    <div className='contact-img'>
                    <img src={Email} alt="jhgfds" />
                    </div>
                    <h2>have any query ?</h2>
                </div>
                <div className='Contact-it'>
                    abhishekpandey@gmail.com
                </div>
                </div>
                <div className='Contact-item'>
                <div className='Contact-it'>
                    <div className='contact-img'>
                    <img src={Hours} alt="jhgfds" />
                    </div>
                    <h2>Contact Any time</h2>
                </div>
                <div className='Contact-it'>
                    +91 6784567567
                </div>
                </div>
            </div>
        </div>
    )
}
