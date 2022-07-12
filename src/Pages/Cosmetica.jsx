import React, { useEffect } from 'react'
// Components
import Hero from '../Components/Hero/Hero'
import SectionImgL from '../Components/SectionImgL/SectionImgL';
import SectionImgR from '../Components/SectionImgR/SectionImgR';
// Images
import HeroImg from '../Media/pexels-cottonbro-6528907.jpg';
import BlankImg from '../Media/services/img/cosmetic/pexels-andrea-piacquadio-789822.jpg';
import CambImg from '../Media/services/img/cosmetic/pexels-nick-oz-1055859.jpg';
import RecImg from '../Media/services/img/cosmetic/pexels-kindel-media-7298633.jpg';

const Cosmetica = ({ active, setActive }) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <Hero
                active={active} setActive={setActive}
                image={HeroImg}
                imageAlign='top'
                overlay='true'
                position='center'
                titleColor='white'
                titleCont={['Odontologia Cosmetica']}
                subTitle='true'
                subTitleCont='Tratamientos especializados para mejorar la salud y apariencia de tu sonrisa.'
                smallerText='true'
            />
            <SectionImgL
                img={BlankImg}
                title='Blanqueamiento'
                body={
                    <>
                        <p>El blanqueamiento dental es un procedimiento estético que consiste en la aclaración del color de los dientes. Desde hace muchos años es motivo de estudios, siendo los principales la efectividad de los agentes blanqueadores y las técnicas que se utilizan.</p>
                        <p>Es una técnica odontológica moderna con finalidad completamente estética, donde se eliminan las manchas y las diferencias marcadas de tonalidad entre las piezas dentales.</p>
                    </>
                }
            />
            <SectionImgR
                img={CambImg}
                title='Cambio De Imagen'
                body={
                    <>
                        <p>Un cambio de imagen de sonrisa es un tratamiento de odontología cosmética integral y diseñado a medida centrado en mejorar la apariencia de su sonrisa.</p>
                        <p>Dependiendo de sus necesidades, esto podría implicar solo un tipo de tratamiento, o más comúnmente, una colección de tratamientos y terapias cosméticas.</p>
                    </>
                }
            />
            <SectionImgL
                img={RecImg}
                title='Reconstuccion Bucal Completa'
                body={
                    <>
                        <p>Si alguna vez ha deseado retroceder en el tiempo a una sonrisa más completa y una apariencia más juvenil, la reconstrucción completa de la boca es la respuesta.</p> 
                        <p>No hay dos reconstrucciones de boca completa iguales, este proceso es cuidadoso personalizado a sus necesidades y situación individuales.</p>
                    </>
                }
            />
        </div>
    )
}

export default Cosmetica
