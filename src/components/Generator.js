import React, { useState } from 'react'
import '../assets/Styles/Generator.css'

function Generator() {
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')

    return (
        <div className="generator">
            <div className="generator__input-container">
                <h3 className="generator__input-title">
                    ¿Cual es tu numero de telefono?
                </h3>
                <input
                    type="text"
                    className="generator__input"
                    placeholder="Ej.311834828"
                />
                <p className="generator-input-description">
                    Asegurate de que incluyes el codigo de tu pais, seguido por el codigo de area. Ej. Para Mexico 52 
                </p>
            </div>

            <div className="generator__input-container">
                <h4 className="generator__input-title">
                    ¿Que mensaje quieres que te envien?
                </h4>
                <input
                    type="text"
                    className="generator__input"
                    placeholder="Ej. Hola quiero cotizar un servicio"
                />
            </div>

            <button className="generator__btn">
                GENERAR LINK
            </button>
        </div>
    )
}

export default Generator