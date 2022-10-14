import React from 'react';
import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from "./components/home/home";
import Song from "./components/songs/songs";
import Artist from './components/artist/artist';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/" element={<Song/>}/>
            <Route path="/artist" element={<Artist/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
