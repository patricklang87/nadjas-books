

import React, { useState, useEffect } from 'react';
import './App.css';
import Nav from './Components/Nav/Nav';
import Banner from './Components/Banner/Banner';
import About from './Components/About/About';
import Books from './Components/Books/Books';
import Cafe from './Components/Cafe/Cafe';
import Contact from './Components/Contact/Contact';
import Visit from './Components/Visit/Visit';
import LocationPhoto from './Components/LocationPhoto/LocationPhoto';
import Footer from './Components/Footer/Footer';
import News from './Components/News/News';

function App() {
  const [navVisible, setNavVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    if (windowWidth >= 600) {
      setNavVisible(true);
    }
    if (windowWidth < 600) setNavVisible(false);
  }, [windowWidth]);

  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });

  return (
    <div className="App">
        <Nav navVisible={navVisible} setNavVisible={setNavVisible} />
        <main onClick={() => {
          (windowWidth <= 600) && setNavVisible(false) 
        }}>
          <Banner />
          <About />
          <News />
          <Books />
          <Cafe />
          <Contact />
          <Visit />
          <LocationPhoto />
        </main>
        <footer>
          <Footer />
        </footer>
    </div>
  );
}

export default App;
