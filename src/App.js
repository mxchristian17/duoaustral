import React, { useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import AboutUs from './Components/AboutUs/AboutUs';
import Video from './Components/Video/Video';
import Services from './Components/Services/Services';
import Gallery from './Components/Gallery/Gallery';
import { BrowserRouter } from 'react-router-dom';

function App() {

  const [ muted, setMuted ] = useState(true)
  const [ initialized, setInitialized ] = useState(false)
    
  const muteToggle = () => {
    muted ? setMuted(false) : setMuted(true)
    setInitialized(true)
  }

  return (
    <BrowserRouter>
      <div className="App" onClick={initialized ? null : muteToggle}>
        <NavBar />
        <Video muted={muted} muteToggle={muteToggle} setMuted={setMuted} />
        <AboutUs />
        <Services />
        <Gallery />
      </div>
    </BrowserRouter>
  );
}

export default App;
