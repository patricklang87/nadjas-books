import React from 'react';
import skane from '../../images/East_Genesee_Street.jpg';
import './LocationPhoto.css';

export default function LocationPhoto() {
    return (
        <div className="locationPhoto">
            <img src={skane} alt="Skanelates East Genesee St." />
        </div>
    )
}
