import React from 'react';
import './Banner.css'
import bannerImg from '../../images/timothy-barlin-unsplash.jpg';

export default function Banner() {
    return (
        <header className="banner">
            <div className="bannerLogo">
                <h1>
                    Nadja's
                </h1>
                <h2>
                    Bookshop &#x26; Cafe
                </h2>
                <h3>
                    Browse &#128959; Create &#128959; Caffinate
                </h3>
                </div>
            <img src={bannerImg} alt="A cup of coffee beside an open book" />

            <div>
            
           
            </div>        
        </header>
    )
}
