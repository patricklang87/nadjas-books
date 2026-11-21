import React, {useState} from 'react';
import NewsBox from './NewsBox';
import './News.css';
import newsItems from './newsItems.js';
import NewsScroller from './NewsScroller';

const prefersReducedMotion = () =>
    typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function News() {
    const [currentItem, setCurrentItem] = useState(0);
    // Auto-advancing content must be pausable (WCAG 2.2.2); start paused for
    // people who have asked their system to reduce motion.
    const [paused, setPaused] = useState(prefersReducedMotion);

    return (
        <section id="news" className="News" aria-roledescription="carousel" aria-label="What's New">
            <h2>What's New</h2>
            <NewsBox currentItem={currentItem} paused={paused} />
            <NewsScroller
                newsItems={newsItems}
                setCurrentItem={setCurrentItem}
                currentItem={currentItem}
                paused={paused}
            />
            <button type="button" className="newsPause" onClick={() => setPaused(!paused)}>
                {paused ? 'Play slideshow' : 'Pause slideshow'}
            </button>
        </section>
    )
}
