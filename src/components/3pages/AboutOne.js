import React from 'react';
import './Pages.css';
import WebImg from '../images/web.png';
import MobileImg from '../images/phone.png';
import SettingImg from '../images/web.png';
import FolderImg from '../images/folder.png';



export default function AboutOne() {
    return (
        <div className='aboutOne'>
            <div className='heading-one'>What I have to do</div>
            <div className='oneHead-item'>
                <div className='item-one'>
                    <div className='items-one-img'>
                        <img src={SettingImg} alt='sdfghjk' />
                    </div>
                    <div className='items-one-p'>
                        <h4>Web Development</h4>
                       <p>able to create a beautiful sites</p>
                    </div>
                </div>
                <div className='item-one'>
                <div className='items-one-img'>
                        <img src={FolderImg} alt='sdfghjk' />
                    </div>
                    <div className='items-one-p'>
                        <h4>React Developer</h4>
                       <p>able to create sites using ReactJS </p>
                    </div>
                </div>
                <div className='item-one'>
                <div className='items-one-img'>
                        <img src={MobileImg} alt='sdfghjk' />
                    </div>
                    <div className='items-one-p'>
                        <h4>Responsive design</h4>
                       <p>responsive sites at a professional level</p>
                    </div>
                </div>
                <div className='item-one'>
                <div className='items-one-img'>
                        <img src={WebImg} alt='sdfghjk' />
                    </div>
                    <div className='items-one-p'>
                        <h4>Development</h4>
                       <p>able to create a beautiful sites</p>
                    </div>
                </div>
            </div>
            <div className='right'></div>
        </div>
    )
}
