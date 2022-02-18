import './App.css';
import NavBar from './Components/NavBar/NavBar';
import AboutUs from './Components/AboutUs/AboutUs';
import Video from './Components/Video/Video';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Video />
        <AboutUs />
      </div>
    </BrowserRouter>
  );
}

export default App;
