import React from 'react';
import './Nav.css'
import hamburger from '../../images/Hamburger_icon.svg.png';

export default function Nav({navVisible, setNavVisible}) {
    
    const handleClick = () => {
        if (window.innerWidth < 600) {
            setNavVisible(false);
        }
    }

    return (
        <div>
            <img 
                className="hamburgerIcon"
                src={hamburger}
                alt="hamburger icon"
                style={(navVisible) ? {display: 'none'} : {}}
                onClick={() => setNavVisible(true)}/>
            <div className="navbar" style={(navVisible) ? {top: '0'} : {top: '-210px'}}>
                <ul>
                    <li><a onClick={handleClick} href="#about">About Nadja's</a></li>
                    <li><a onClick={handleClick}href="#news">What's New</a></li>
                    <li><a onClick={handleClick}href="#books">Our Bookshop</a></li>
                    <li><a onClick={handleClick} href="#cafe">Our Cafe</a></li>
                    <li><a onClick={handleClick}href="#contact">Contact Us</a></li>
                    <li><a onClick={handleClick}href="#visit">Visit Us</a></li>    
                </ul> 
                <div className="navBorder"></div>
            </div>

        </div>

    )
}
