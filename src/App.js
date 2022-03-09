import React from 'react'
import './App.css';
import wappLogo from "./assets/wapp-logo.png"
import leftPlane from './assets/paper-planes-3.png'
import rightPlane from './assets/paper-planes-1.png'
import video from './assets/video.gif'

function App() {
  return (
    <div className="app">
      <div className="app__header">
        {/* HEADER */}
        <img src={wappLogo} alt="Whatsapp Logo" className="header__logo" />
        <h3>WHATSAPP LINK GENERATOR</h3>
      </div>

      <div className="hero">
        <div className="hero__text-container">

          <h1 className="hero__heading">
            <span>WHATSAPP</span> LINK
            <br />
            GENERATOR
            <img src={wappLogo} alt="Whatsapp Logo" className="header__logo" />
          </h1>

          <p className="hero__text">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          </p>

          <a href="#generator" className="hero__link">
            CREAR LINK
          </a>

        </div>

        <div className="hero__video-container">
          <img src={leftPlane} alt="Paper Plane Ilustration" className="hero__video-container--left-plane" />
          <img src={video} alt="Cellphone with screen recording"
            className="hero__video-container-video" />
          <img src={rightPlane} alt="Paper Plane Ilustration" className="hero__video-container--right-plane" />
        </div>
      </div>

    </div>
  );
}

export default App;
