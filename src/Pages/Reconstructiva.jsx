import React, { useEffect } from 'react'
// Components
import Hero from '../Components/Hero/Hero'
import SectionImgL from '../Components/SectionImgL/SectionImgL'
import SectionImgR from '../Components/SectionImgR/SectionImgR'
// Images
import HeroImg from '../Media/pexels-tima-miroshnichenko-5355710.jpg';
import ImpImg from '../Media/services/img/reconst/pexels-cottonbro-6502343.jpg';
import RetImg from '../Media/services/img/reconst/pexels-cottonbro-6502033.jpg';

const Reconstructiva = ({ active, setActive }) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <Hero
                active={active} setActive={setActive}
                image={HeroImg}
                imageAlign='center'
                overlay='true'
                position='center'
                titleColor='white'
                titleCont={['Odontología Quirúrgica']}
                subTitle='true'
                subTitleCont='Diagnóstico y tratamientos dentales para recuperar su salud y funcionalidad.'
                smallerText='true'
            />
            <SectionImgL
                img={RetImg}
                title='Elemento Retenidos'
                body={
                    <>
                        <p>Un Elemento retenido es aquel que, una vez llegada la época normal de su erupción, quedan encerrados dentro de los maxilares manteniendo la integridad de su saco pericoronario fisiológico.</p>
                        <p>Cualquier diente de la cavidad bucal puede estar afectado, pero muchos estudios han demostrado que los terceros molares inferiores, los superiores y los caninos superiores son los que mayormente quedan retenidos.</p>
                    </>
                }
            />
            <SectionImgR
                img={ImpImg}
                title='Implantes'
                body={
                    <>
                        <p>Ofrecemos implantes dentales modernos y de alta tecnología que son fuertes, estables, duraderos, de aspecto natural y funcionales.</p>
                        <p>Los implantes restauran su capacidad para comer, hablar, sonreír y vivir con confianza.</p>
                    </>
                }
            />
        </div>
    )
}

export default Reconstructiva
