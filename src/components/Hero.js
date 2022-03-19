import React from 'react'
import './../assets/Styles/Hero.css'

import wappLogo from "./../assets/Img/wapp-logo.png"
import leftPlane from './../assets/Img/paper-planes-3.png'
import rightPlane from './../assets/Img/paper-planes-1.png'
import video from './../assets/Img/video.gif'

import AnchorLink from 'react-anchor-link-smooth-scroll'

function Hero() {
    return (
        <>

            <div className="hero">
                <div className="hero__text-container">

                    <h1 className="hero__heading">
                        <span>WHATSAPP</span> LINK
                        <br />
                        GENERATOR
                        <img src={wappLogo} alt="Whatsapp Logo" className="header__logo" />
                    </h1>

                    <p className="hero__text">
                        <span>Genera un enlace a Whatsapp rapidamente, con un mensaje predefinido y compartelo con tu audiencia en tus redes sociales!</span>
                        <br/>
                        <br />
                        Al dar click en el enlace generado, tus clientes podran enviarte un mensaje de WhatsApp sin tener que añadir tu numero de telefono a su lista de contactos.
                    </p>

                    <AnchorLink href="#generator" className="hero__link">
                        CREAR LINK
                    </AnchorLink>

                </div>

                <div className="hero__video-container">
                    <img src={leftPlane} alt="Paper Plane Ilustration" className="hero__video-container--left-plane" />
                    <img src={video} alt="Cellphone with screen recording"
                        className="hero__video-container-video" />
                    <img src={rightPlane} alt="Paper Plane Ilustration" className="hero__video-container--right-plane" />
                </div>
            </div>
        </>
    )
}

export default Hero