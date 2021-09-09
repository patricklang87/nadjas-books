import React from 'react';
import img from '../../images/bookstack-unsplash.jpg'


export default function NewsItem({item}) {
    const image = require(`/nadjas-books/static/media/${item.img}`);

    return (
        <div className="NewsItem">
            <img src={image} alt={item.alt} />
            <div className="newsText">
                <h3>{item.title}</h3>
                <p>{item.date}</p>
                <p>{item.text}</p>
            </div>
        </div>
    )
}
