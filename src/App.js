import React from 'react'
import './assets/Styles/App.css';
import Hero from './components/Hero'
import Generator from './components/Generator'
import fbExample from './assets/Img/facebook--example.jpg'
import igExample from './assets/Img/instagram--example.jpg'
import twExample from './assets/Img/twitter--example.jpg'

import wappLogo from "./assets/Img/wapp-logo.png"

function App() {
  return (
    <div className="app">

      <div className="app__header">
        <img src={wappLogo} alt="Whatsapp Logo" className="header__logo" />
        <h2 className="app__header--heading">WHATSAPP LINK GENERATOR</h2>
      </div>

      <Hero />
      <Generator />

      <div className="app__examples">
        <h2 className="examples__heading">
          ¿EN QUE LO PUEDES USAR?
        </h2>

        <div className="examples-container">

          <div className="example">
            <img src={igExample} alt="Instagram Ejemplo" className="example--img" />
            <p className="example--text">COMPARTELO EN INSTAGRAM</p>
          </div>

          <div className="example">
            <img src={fbExample} alt="Facebook Ejemplo" className="example--img" />
            <p className="example--text">COMPARTELO EN FACEBOOK</p>
          </div>

          <div className="example">
            <img src={twExample} alt="Twitter Ejemplo" className="example--img" />
            <p className="example--text">COMPARTELO EN TWITTER</p>
          </div>


        </div>
      </div>
    </div>
  );
}

export default App;
