import React, {useState} from 'react';
import NewsBox from './NewsBox';
import './News.css';
import newsItems from './newsItems.js';
import NewsScroller from './NewsScroller';

export default function News() {
    const [currentItem, setCurrentItem] = useState(0);


    return (
        <div id="news" className="News">
            <h2>What's New</h2>
            <NewsBox currentItem={currentItem} />
            <NewsScroller newsItems={newsItems} setCurrentItem={setCurrentItem} currentItem={currentItem} />
        </div>
    )
}
