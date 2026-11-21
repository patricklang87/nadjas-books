import React, { useRef } from 'react';
import './Nav.css'
import hamburger from '../../images/Hamburger_icon.svg.png';

const links = [
    ['#about', "About Nadja's"],
    ['#news', "What's New"],
    ['#books', 'Our Bookshop'],
    ['#cafe', 'Our Cafe'],
    ['#contact', 'Contact Us'],
    ['#visit', 'Visit Us'],
];

const isMobile = () => window.innerWidth < 600;

export default function Nav({navVisible, setNavVisible}) {
    const menuButton = useRef(null);

    const closeMenu = (returnFocus) => {
        setNavVisible(false);
        if (returnFocus && menuButton.current) menuButton.current.focus();
    };

    const handleClick = () => {
        if (isMobile()) closeMenu(false);
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Escape' && navVisible && isMobile()) closeMenu(true);
    };

    return (
        <nav aria-label="Main" onKeyDown={handleKeyDown}>
            <button
                ref={menuButton}
                type="button"
                className="hamburgerIcon"
                aria-label={navVisible ? 'Close menu' : 'Open menu'}
                aria-expanded={navVisible}
                aria-controls="main-menu"
                onClick={() => (navVisible ? closeMenu(false) : setNavVisible(true))}>
                <img src={hamburger} alt="" />
            </button>
            <div
                id="main-menu"
                className="navbar"
                style={(navVisible) ? {top: '0', visibility: 'visible'} : {top: '-210px', visibility: 'hidden'}}>
                <ul>
                    {links.map(([href, label]) => (
                        <li key={href}><a onClick={handleClick} href={href}>{label}</a></li>
                    ))}
                </ul>
                <div className="navBorder"></div>
            </div>
        </nav>
    )
}
