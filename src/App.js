import React, { useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import AboutUs from './Components/AboutUs/AboutUs';
import Video from './Components/Video/Video';
import { BrowserRouter } from 'react-router-dom';

function App() {

  const [ muted, setMuted ] = useState(true)
  const [ initialized, setInitialized ] = useState(false)

 /* if(!initialized) {
    window.addEventListener('click', (event) => {
        setMuted(false)
        setInitialized(true)
    })
  }*/

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Video muted={muted} setMuted={setMuted} />
        {initialized ? "inicializado" : 'no inicializado'}
        <AboutUs />
      </div>
    </BrowserRouter>
  );
}

export default App;
