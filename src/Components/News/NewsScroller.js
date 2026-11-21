import React, { useEffect } from 'react';


export default function NewsScroller({newsItems, setCurrentItem, currentItem, paused}) {

    const scrollerButtonWidth = (window.innerWidth / newsItems.length) - 5;

    const active = {
        backgroundColor: 'white',
        width: scrollerButtonWidth + 'px'
    }

    const inactive = {
        backgroundColor: 'grey',
        width: scrollerButtonWidth + 'px'
    }

    const scrollerButtons = newsItems.map((item, index) => {
        return (
            <button
                type="button"
                className="scrollerButton"
                onClick={() => setCurrentItem(index)}
                style={(index === currentItem) ? active : inactive}
                aria-label={`Show news item ${index + 1} of ${newsItems.length}: ${item.title}`}
                aria-current={index === currentItem ? 'true' : undefined}
                key={'sb' + index}
            ></button>)
    });

    const advanceSlideShow = () => {
        if (currentItem === newsItems.length - 1) {
            setCurrentItem(0); 
        } else {
            setCurrentItem(currentItem + 1 );
        }
    }

    useEffect(() => {
        if (paused) return undefined;
        const advancer = setInterval(advanceSlideShow,  6000);
        return () => clearInterval(advancer);
    })
    

    return (
        <div className="NewsScroller">
            {scrollerButtons}
        </div>
    );
}
