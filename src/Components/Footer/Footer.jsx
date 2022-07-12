import React from 'react'
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
    return (
        <div className='footer-conteiner'>
            <div className='footer-nav'>
                <div className='page-content'>
                    <Link className='page-link' to='/general'>
                        <h2>General</h2>
                        <ul>
                            <li>Odontologia Familiar</li>
                            <li>Operatoria</li>
                            <li>Endodoncia</li>
                            <li>Protesis</li>
                        </ul>
                    </Link>
                </div>
                <div className='page-content'>
                    <Link className='page-link' to='/cosmetica'>
                        <h2>Cosmetica</h2>
                        <ul>
                            <li>Blanqueamiento Dental</li>
                            <li>Cambios De Imagen</li>
                            <li>Reconstrucción Bucal Completa</li>
                        </ul>
                    </Link>
                </div>
                <div className='page-content'>
                    <Link className='page-link' to='/cirugia'>
                        <h2>Cirugía</h2>
                        <ul>
                            <li>Elementos Deferidos</li>
                            <li>Implantes</li>
                        </ul>
                    </Link>
                </div>
                <div className='page-content'>
                    <a className='page-link' href='https://www.google.com/maps/search/Dra.+Claudia+A.+Cuello/@-31.2768759,-64.3076157,11.25z' target='_blank' rel="noreferrer">
                        <h2>Reseñas</h2>
                        <ul>
                            <li>Google Maps</li>
                        </ul>
                    </a>
                </div>
            </div>
            <div className='developer-mark'>
                Developed by <a href='https://nicolasebastida.netlify.app/' target='_blank' rel="noreferrer">Nicolas E. Bastida</a>
            </div>
        </div>
    )
}

export default Footer