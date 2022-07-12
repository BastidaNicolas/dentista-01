import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './toolbar.css';
import Logo from '../../Media/Finish-logo-min.webp';
import Popup from '../Popup/Popup';

const Toolbar = ({ active, setActive }) => {

    const [open, setOpen] = useState(false);

    return (
        <div
            className='toolbar-container'
            id='toolbar'
        >
            <div className='toolbar'>
                <Link
                    onClick={() => {
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth"
                        })
                        setOpen(false)
                    }}
                    className='link-logo'
                    to='/'
                >
                    <img src={Logo} alt="Claudia A. Cuello M.P. 5324" width='233px' height='45px' />
                </Link>
                <div 
                    className={open ? 'mob-nav-btn open' : 'mob-nav-btn'} 
                    id='burgerBtn' 
                    onClick={() => setOpen(!open)}
                >
                    <div className="burger"></div>
                </div>
                <nav className={`menu ${open && 'menu-active'}`} >
                    <ul>
                        <li
                            onClick={() => setOpen(false)}
                        >
                            <Link className='link' to='/general'>General</Link>
                        </li>
                        <li
                            onClick={() => setOpen(false)}
                        >
                            <Link className='link' to='/cosmetica'>Cosmetica</Link>
                        </li>
                        <li
                            onClick={() => setOpen(false)}
                        >
                            <Link className='link' to='/cirugia'>Cirugía</Link>
                        </li>
                        {/* <li 
                                    onClick={() => setOpen(false)} 
                                >
                                    <Link className='link' to='/galeria'>Galeria</Link>
                                </li> */}
                    </ul>
                    <button
                        onClick={() => {
                            setOpen(false)
                            setActive(true)
                        }}
                    >
                        Contactar
                    </button>
                </nav>
            </div>
            <Popup active={active} setActive={setActive} />
        </div>
    )
}

export default Toolbar
