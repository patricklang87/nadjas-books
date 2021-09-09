import React from 'react';
import bookshop from '../../images/pj-accetturo-unsplash.jpg';

export default function Books() {
    return (
        <div id="books" className="section" style={{ clipPath: 'polygon(0 0, 100% 5%, 100% 95%, 0 100%)'}}>
                <div className="textDiv">
                    <h2>Books</h2>
                    <p>Nadja's offers a wide selection of used books. Explore our general section while sipping a hot beverage, or visit Margaret in the back of the house, where we keep our carefully curated selection of antiquariat books.</p>
            </div>
            <div>
                <img src={bookshop} alt="bookshop" />
                
            </div>
        </div>
    )
}
