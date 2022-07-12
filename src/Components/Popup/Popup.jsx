import React from 'react'
import { BsWhatsapp, BsTelegram, BsFillTelephoneOutboundFill } from "react-icons/bs";
import './popup.css'

const Popup = ({ active, setActive }) => {
    return (
        <div 
            className={`popup-container ${active && 'open-popup'}`}
            id='popupContainer'
            onClick={(e) => {
                if(e.target.id === 'popupContainer'){
                    setActive(false)
                }
            }}    
        >
            <div className='popup-content'>
                <a
                    className='option-btn whatsapp'
                    href='https://wa.me/5493512043855'
                    target='_blank'
                    rel="noreferrer"
                    onClick={() => (
                        setActive(false)
                    )}
                >
                    <BsWhatsapp/><div>Whatsapp</div>
                </a>
                <a
                    className='option-btn telegram'
                    href='https://t.me/ClaudiaACuello'
                    target='_blank'
                    rel="noreferrer"
                    onClick={() => (
                        setActive(false)
                    )}
                >
                    <BsTelegram/> Telegram
                </a>
                <a
                    className='option-btn telefono'
                    href='tel:3512043855'
                    target='_blank'
                    rel="noreferrer"
                    onClick={() => (
                        setActive(false)
                    )}
                >
                    <BsFillTelephoneOutboundFill/> Llamada
                </a>
            </div>
        </div>
    )
}

export default Popup
