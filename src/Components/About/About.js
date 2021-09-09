import React from 'react';
import bookshopSign from '../../images/paolo-chiabrando-unsplash.jpg';
import coffeeSign from '../../images/coffee_1920.jpg';
import './About.css';

export default function About() {
    return (
        <div id="about">
            <div >
                <img className="aboutImg1" src={bookshopSign} alt="Books Sign" />
            </div>

            <div >
                <h2>About Nadja's</h2>
                <p>At Nadja's you can sip our delicious fair-trade, single-origin coffee while you browse, relax or work.</p>
            </div>
            <div>
                <img className="aboutImg2" src={coffeeSign} alt="Coffee Sign" />
            </div>
            

        </div>
    )
}
