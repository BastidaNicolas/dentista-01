import React, { useEffect } from 'react'
// Components
import Hero from '../Components/Hero/Hero'
import SectionImgL from '../Components/SectionImgL/SectionImgL'
import SectionImgR from '../Components/SectionImgR/SectionImgR'
// Images
import HeroImg from '../Media/pexels-max-andrey-2669601.jpg'
import FamImg from '../Media/services/img/general/StockSnap_5ZSIKFITCJ.jpg';
import OpImg from '../Media/services/img/general/pexels-cedric-fauntleroy-4269694.jpg';
import EndoImg from '../Media/services/img/general/pexels-photo-5355695.jpeg'
import ProtImg from '../Media/services/img/general/matthew-poetker-nWZs_SnBDmg-unsplash.jpg';

const General = ({ active, setActive }) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='general-container'>
            <Hero
                active={active} setActive={setActive}
                image={HeroImg}
                imageAlign='bottom'
                overlay='true'
                position='center'
                titleColor='white'
                titleCont={['Odontologia General']}
                subTitle='true'
                subTitleCont='Diagnóstico, limpiezas y tratamientos para mantener una correcta salud bucal.'
                smallerText='true'
            />
            <SectionImgL
                img={FamImg}
                title='Odontologia Familiar'
                body={
                    <>
                        <p>Ayudar a sus hijos a establecer hábitos dentales saludables en el hogar y asegurarse de que vean al dentista regularmente puede ser un desafío. Y en medio de centrarse en el cuidado de su hijo, su propia salud a menudo pasa a un segundo plano.</p>
                        <p>Por eso hacemos que sea fácil para toda la familia obtener la atención que necesitan (incluyéndote a ti).</p>
                    </>
                }
            />
            <SectionImgR
                img={OpImg}
                title='Operatoria'
                body={
                    <>
                        <p>Algunas personas son más propensas a las caries que otras, pero aun así, casi el 90% de los adultos tendrán una caries en un momento u otro.</p>
                        <p>La clave para tratar una cavidad es la detección temprana, así que esté atento a las señales comunes como: Dolor al masticar, Sensibilidad dental, Dolor en un lado de la boca.</p>
                        <p>Sin embargo.¡Algunas caries no muestran ningún síntoma en absoluto! Un chequeo dental es la única manera de saber con certeza si usted está lidiando con la caries dental.</p>
                    </>
                }
            />
            <SectionImgL
                img={EndoImg}
                title='Endodoncia'
                body={
                    <>
                        <p>Los dientes tienen conductos en las raíces, que es por donde pasa el nervio. Cuando el nervio está inflamado hemos de retirarlo y limpiar el conducto (eliminar bacterias, tejido necrótico) y luego sellarlo con un material plástico especial.</p>
                        <p>Después de sellar el conducto, se pasa a hacer la reconstrucción del diente destruido por la caries o la fractura.</p>
                    </>
                }
            />
            <SectionImgR
                img={ProtImg}
                title='Protesis'
                body={
                    <>
                        <p>Los dientes son una parte muy importante de nuestra apariencia. Si nos falta un diente, ya nos sentimos desanimados, inseguros de nosotros mismos. Pero si perdemos más?</p>

                        <p>En caso que dejamos la boca sin dientes se corre el riesgo de mal oclusión  y una serie de otras condiciones adversas y cambios físicos, ciertamente.</p>

                        <p>Para evitar estas situaciones, hay que ir al técnico que le ayudará a elegir la prótesis dental adecuada para todas las situaciones.</p>
                    </>
                }
            />
        </div>
    )
}

export default General
