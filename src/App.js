import React, { useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import AboutUs from './Components/AboutUs/AboutUs';
import Video from './Components/Video/Video';
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
      </div>
    </BrowserRouter>
  );
}

export default App;
