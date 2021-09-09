import React from 'react';
import cafe from '../../images/rod-long-unsplash.jpg'

export default function Cafe() {
    return (
        <div id="cafe" className="section" style={{flexDirection: 'row-reverse', clipPath: 'polygon(0 5%, 100% 0, 100% 100%, 0 95%)'}}>

                <div className="textDiv">
                    <h2>Cafe</h2>
                    <p>Come let our world-class baristas make you any of a wide selection of espresso drinks. Catch up with friends in comfortable surroundings and take advantage of our free WiFi.</p>
                </div>
            <div>
                <img src={cafe} alt="People drinking coffee" />
            </div>

        </div>
    )
}
