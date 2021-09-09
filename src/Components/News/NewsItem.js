import React from 'react';
import news1 from '../../images/news1.jpg';
import news2 from '../../images/news2.jpg';
import news3 from '../../images/news3.jpg';


export default function NewsItem({item}) {
    let src;
    if (item.id === 1) src = news1;
    if (item.id === 2) src = news2;
    if (item.id === 3) src = news3;

    return (
        <div className="NewsItem">
            <img src={src} alt={item.alt} />
            <div className="newsText">
                <h3>{item.title}</h3>
                <p>{item.date}</p>
                <p>{item.text}</p>
            </div>
        </div>
    )
}
