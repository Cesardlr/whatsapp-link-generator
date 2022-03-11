import React from 'react'
import './assets/Styles/App.css';
import Hero from './components/Hero'
import Generator from './components/Generator'

import wappLogo from "./assets/Img/wapp-logo.png"

function App() {
  return (
    <div className="app">

      <div className="app__header">
        <img src={wappLogo} alt="Whatsapp Logo" className="header__logo" />
        <h2>WHATSAPP LINK GENERATOR</h2>
      </div>

      <Hero />
      <Generator />
    </div>
  );
}

export default App;
