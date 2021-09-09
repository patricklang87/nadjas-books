import React from 'react';


export default function NewsItem({item}) {
    return (
        <div className="NewsItem">
            {(item.img) && <img src={item.img} alt={item.alt} />}
            <div className="newsText">
                <h3>{item.title}</h3>
                <p>{item.date}</p>
                <p>{item.text}</p>
            </div>
        </div>
    )
}
