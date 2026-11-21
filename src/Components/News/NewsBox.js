import React from 'react';
import NewsItem from './NewsItem';
import newsItems from './newsItems.js'

export default function NewsBox({ currentItem, paused }) {
    const newsItemsPopulated = newsItems.map((item, index) => (
        <NewsItem item={item} key={item.id} hidden={index !== currentItem} />
    ));

    const newsBoxWidth = window.innerWidth * newsItems.length;

    const newsBoxPosition = window.innerWidth * currentItem * -1;

    const newsBoxPositioning = {
        width: newsBoxWidth + 'px',
        left: newsBoxPosition + 'px'
    }




    return (
        <div className="NewsBox"
            style={newsBoxPositioning}
            aria-live={paused ? 'polite' : 'off'}
        >
            {newsItemsPopulated}
        </div>
    )
}
