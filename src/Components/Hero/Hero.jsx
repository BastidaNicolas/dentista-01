import React from 'react'
import './hero.css';
import Popup from '../Popup/Popup';

const Hero = ({active, setActive, image, imageAlign, position, titleNum, titleCont, titleColor, subTitle, subTitleCont, overlay, smallerText}) => {
    
    return (
        <>
            <div 
                style={{ 
                    backgroundImage:`${overlay === 'true' ? 'linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)),' : ''} url(${image})`, 
                    backgroundPosition:`${imageAlign}` 
                }} 
                className={`hero-container ${position}`}
            >
                <div 
                    className='hero-content' 
                    style={{
                        color:`${titleColor}`, 
                        paddingTop: `${position === 'center' ? '0' :'clamp(6rem,12vw,8.75rem)'}`,
                        fontSize:`clamp(${smallerText === 'true' ? '1.8rem' : '2.5rem'}, 5vw, 5rem)`
                    }}
                >
                    {titleNum === '2' ?
                        <>
                            <h2 className='title-1'>{titleCont[0]}</h2>
                            <h2 className='title-2'>{titleCont[1]}</h2>
                        </>
                    :
                        <h2 className='title-2'>{titleCont[0]}</h2>
                    }
                    {subTitle === 'true' ?
                        <p>{subTitleCont}</p>
                        :
                        ''
                    }
                    <button
                        onClick={() => 
                            setActive(true)
                        }
                    >
                        Realizar una consulta
                    </button>
                </div>
            </div>
            <Popup active={active} setActive={setActive} />
        </>
    )
}

export default Hero
