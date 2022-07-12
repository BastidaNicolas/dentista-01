import React from 'react';
import { Link } from 'react-router-dom';
import './sectionImgL.css';

const SectionImgL = ({ img, title, body, list, route, button}) => {

    return (
        <div
            className='section-container-L'
        >
            <div className='img-container' style={{ backgroundImage: `url(${img})` }}>
            </div>
            <div className='content-container'>
                <div className='content-L'>
                    <h2>{title}</h2>
                    {body}
                    <ul>
                        {list}
                    </ul>
                    <br />
                    {button === 'true' &&
                        <div> {/*USE ROUTE HERE*/}
                            <Link className='section-link-L' to={`/${route}`}>Más Información Sobre {title}</Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default SectionImgL
