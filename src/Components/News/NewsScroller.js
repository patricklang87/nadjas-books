import React, { useEffect } from 'react';


export default function NewsScroller({newsItems, setCurrentItem, currentItem}) {

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
            <div
                className="scrollerButton"
                onClick={() => setCurrentItem(index)}
                style={(index === currentItem) ? active : inactive}
            ></div>)
    });

    const advanceSlideShow = () => {
        if (currentItem === newsItems.length - 1) {
            setCurrentItem(0); 
        } else {
            setCurrentItem(currentItem + 1 );
        }
    }

    useEffect(() => {
        const advancer = setInterval(advanceSlideShow,  6000);
        return () => clearInterval(advancer);
    })
    

    return (
        <div className="NewsScroller">
            {scrollerButtons}
        </div>
    );
}
