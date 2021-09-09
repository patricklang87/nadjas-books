import React from 'react';
import NewsItem from './NewsItem';
import newsItems from './newsItems.js'

export default function NewsBox({ currentItem }) {
    const newsItemsPopulated = newsItems.map(item => <NewsItem item={item} key={item.id} />);

    const newsBoxWidth = window.innerWidth * newsItems.length;

    const newsBoxPosition = window.innerWidth * currentItem * -1;

    const newsBoxPositioning = {
        width: newsBoxWidth + 'px',
        left: newsBoxPosition + 'px'
    }




    return (
        <div className="NewsBox"
            style={newsBoxPositioning}
        >
            {newsItemsPopulated}
        </div>
    )
}
