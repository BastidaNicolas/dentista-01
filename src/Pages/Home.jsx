import React, { useEffect } from 'react';
// Components
import Hero from '../Components/Hero/Hero';
import ExpandGrid from '../Components/ExpandGrid/ExpandGrid';
import SectionImgL from '../Components/SectionImgL/SectionImgL';
import SectionImgR from '../Components/SectionImgR/SectionImgR';
// Section content
import HeroImg from '../Media/Welcome-min.webp';
import GeneralImg from '../Media/services/img/general.jpg';
import CosmeticImg from '../Media/services/img/cosm.jpeg';
import ReconImg from '../Media/services/img/reconst.jpg';

const Home = ({active, setActive}) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <Hero 
                active={active} setActive={setActive} 
                image={HeroImg} 
                imageAlign='right' 
                titleColor='#4d4d4d'
                titleNum='2'
                titleCont={['Cuidar Tu Salud Incluye', 'Cuidar Tu Sonrisa.']}
            />
            <ExpandGrid/>
            <SectionImgL 
                img={GeneralImg}
                title='Odontologia General'
                body={
                    <>
                        <p>El objetivo es prevenir, diagnosticar y resolver problemas dentales comunes. Cualquiera que sea el tratamiento general que requiera, será atendido.</p>
                        <p>Nuestros servicios dentales generales integrales incluyen...</p>
                    </>
                }
                list={
                    <>
                        <li>Odontologia Familiar</li>
                        <li>Operatoria</li>
                        <li>Endodoncia</li>
                        <li>Protesis</li>
                    </>
                }
                route='general'
                button='true'
            />
            <SectionImgR 
                img={CosmeticImg} 
                title='Odontologia Cosmetica'
                body={
                    <>
                        <p>Nuestro cuidado dental cosmético está destinado a mejorar su sonrisa y, al mismo tiempo, mejorar la salud de su cuerpo.</p>
                        <p>Los servicios cosméticos incluyen...</p>
                    </>
                }
                list={
                    <>
                        <li>Blanqueamiento Dental</li>
                        <li>Cambios De Imagen</li>
                        <li>Reconstrucción Bucal Completa</li>
                    </>
                }
                route='cosmetica'
                button='true'
            />
            <SectionImgL 
                img={ReconImg}
                title='Odontología Quirúrgica'
                body={
                    <>
                        <p>El objetivo es prevenir, diagnosticar y resolver problemas dentales comunes. Cualquiera que sea el tratamiento general que requiera, será atendido.</p>
                        <p>Los servicios de odontología quirúrgica incluyen...</p>
                    </>
                }
                list={
                    <>
                        <li>Elementos Retenidos</li>
                        <li>Implantes</li>
                    </>
                }
                route='cirugia'
                button='true'
            />
        </div>
    )
}

export default Home
