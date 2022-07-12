import React from 'react'
import { Link } from 'react-router-dom';
import './sectionImgR.css';

const SectionImgR = ({img, title, body, list, route, button}) => {

    return (
        <div className='section-container-R'>
            <div className='content-container'>
                <div className='content-R'>
                    <h2>{title}</h2>
                    {body}
                    <ul>
                        {list}
                    </ul>
                    <br/>
                    {button === 'true' &&
                        <div> {/*USE ROUTE HERE*/}
                            <Link className='section-link-R' to={`/${route}`}>Más Información Sobre {title}</Link>
                        </div>
                    }
                </div>
            </div>
            <div className='img-container' style={{backgroundImage:`url(${img})`}}>
            </div>
        </div>
    )
}

export default SectionImgR
