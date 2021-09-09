import React from 'react';
import './Visit.css';

export default function Visit() {
    return (
        <div id="visit">
            <div>
                <h2>Visit Us</h2>
                    <p><strong>Monday-Friday </strong>7-7</p>
                    <p><strong>Saturday </strong>7-5</p>
                    <p><strong>Sunday</strong> 8-2</p>

                <p>XXXXX East Genesee St.</p>
                <p>Skanetales, NY 13152 </p>
            </div>
            <div>
                <iframe title="visitUsMap" max-width="425" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=-76.45098209381105%2C42.936097825610354%2C-76.40308856964113%2C42.95500911021259&amp;layer=mapnik&amp;marker=42.94555419411414%2C-76.42703533172607" style={{border: "1px solid black"}}></iframe><br/><small><a href="https://www.openstreetmap.org/?mlat=42.9456&amp;mlon=-76.4270#map=15/42.9456/-76.4270">Show Larger Map</a></small>
            </div>    
        </div>
    )
}
