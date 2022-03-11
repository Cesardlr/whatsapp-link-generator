import React, { useState } from 'react'
import '../assets/Styles/Generator.css'
import QRCode from "react-qr-code";

function linkGenerator(phone, msg) {
    const parsedMsg = msg.split(' ').join('%20')
    const link = 'https://wa.me/' + phone + '?text=' + parsedMsg
    return link
}

function Generator() {
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const [link, setLink] = useState('')

    return (
        <div className="generator" id="generator">
            <div className="generator__input-container">
                <h3 className="generator__input-title">
                    ¿Cual es tu numero de telefono?
                </h3>
                <input
                    type="text"
                    className="generator__input"
                    placeholder="Ej.311834828"
                    onChange={e => setPhone(e.target.value)}
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
                    onChange={e => setMessage(e.target.value)}
                />
            </div>

            <button
                className="generator__btn"
                onClick={() => {
                    setLink(linkGenerator(phone, message))
                    console.log(link)
                }}
            >
                GENERAR LINK
            </button>

            {
                link && (
                    <div className="generator__result">
                        <div className="generator__result--container">
                            <p>Aqui esta tu link:</p>
                            <div className="input-container">
                                <input type="text" readOnly className="generator__result-input" value={link} />
                                <button
                                    className="generator__result-btn"
                                    onClick={() => { navigator.clipboard.writeText(link) }}
                                >
                                    Copiar Link
                                </button></div>
                        </div>

                        <div className="generator__result--container">
                            <QRCode
                                value={link}
                                size={150}
                            />
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Generator