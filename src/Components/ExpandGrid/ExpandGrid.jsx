import React, { useState } from 'react';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import './expandGrid.css';

// // Images
import Avalian from '../../Media/obras-sociales/0Avalian.webp';
import Apross from '../../Media/obras-sociales/0Apross.webp';
import CPCE from '../../Media/obras-sociales/0CPCE-cordoba.webp';
import Unimed from '../../Media/obras-sociales/0unimed.webp';
import AsociacionEclesiasticaSanPedro from '../../Media/obras-sociales/0Asoc.- Eclesiastica-san-Pedro.webp';
import Osseg from '../../Media/obras-sociales/01osseg.webp';
import PrevencionSalud from '../../Media/obras-sociales/01prevencion-salud.webp';
import AmericaServicios from '../../Media/obras-sociales/America-servicios.webp';
import CajaDeAbogadosProvinciaDeCordoba from '../../Media/obras-sociales/caja-de-abogados-provincia-de-cordoba.webp';
import cajaNotarial from '../../Media/obras-sociales/caja-notarial.webp';
import Daspu from '../../Media/obras-sociales/Daspu.webp';
import Dasuten from '../../Media/obras-sociales/dasuten.webp';
import FederadaSalud from '../../Media/obras-sociales/Federada-salud.webp';
import Galeno from '../../Media/obras-sociales/galeno.webp';
import Integral from '../../Media/obras-sociales/integral.webp';
import Iosfa from '../../Media/obras-sociales/iosfa.webp';
import JerarquicosSalud from '../../Media/obras-sociales/Jerarquicos-Salud.webp';
import Medicus from '../../Media/obras-sociales/medicus.webp';
import MutualMedicaRioCuarto from '../../Media/obras-sociales/mutual-medica-rio-cuarto.webp';
import ObraSocialWilliamHope from '../../Media/obras-sociales/o.s.-william-hope.webp';
import Osadef from '../../Media/obras-sociales/osadef.webp';
import oscearaSalud from '../../Media/obras-sociales/osceara-salud.webp';
import Osdop from '../../Media/obras-sociales/Osdop.webp';
import Osme from '../../Media/obras-sociales/osme.webp';
import Ospes from '../../Media/obras-sociales/ospes.webp';
import Ospil from '../../Media/obras-sociales/Ospil.webp';
import Ospim from '../../Media/obras-sociales/ospim.webp';
import Ospip from '../../Media/obras-sociales/ospip.webp';
import Ospjn from '../../Media/obras-sociales/ospjn_RE-DO_.webp';
import Ospla from '../../Media/obras-sociales/ospla.webp';
import Osrja from '../../Media/obras-sociales/osrja.webp';
import PoliciaFederal from '../../Media/obras-sociales/policia-federal.webp';
import ProvinciaArt from '../../Media/obras-sociales/provincia-art.webp';
import RedArgentinaDeSalud from '../../Media/obras-sociales/red-argentina-de-salud.webp';
import Sadaic from '../../Media/obras-sociales/sadaic.webp';
import TvSalud from '../../Media/obras-sociales/tv-salud.webp';

const ExpandGrid = () => {

    const ObSoc= [
        {
            src: Avalian,
            alt: 'Avalian'
        },
        {
            src: Apross,
            alt: 'Apross'
        },
        {
            src: CPCE,
            alt: 'CPCE'
        },
        {
            src: Unimed,
            alt: 'Unimed'
        },
        {
            src: AsociacionEclesiasticaSanPedro,
            alt: 'Asociacion Eclesiastica San Pedro'
        },
        {
            src: Osseg,
            alt: 'Osseg'
        },
        {
            src: PrevencionSalud,
            alt: 'Prevencion Salud'
        },
        {
            src: AmericaServicios,
            alt: 'America Servicios'
        },
        {
            src: CajaDeAbogadosProvinciaDeCordoba,
            alt: 'Caja De Abogados Provincia De Cordoba'
        },
        {
            src: cajaNotarial,
            alt: 'caja Notarial'
        },
        {
            src: Daspu,
            alt: 'Daspu'
        },
        {
            src: Dasuten,
            alt: 'Dasuten'
        },
        {
            src: FederadaSalud,
            alt: 'Federada Salud'
        },
        {
            src: Galeno,
            alt: 'Galeno'
        },
        {
            src: Integral,
            alt: 'Integral'
        },
        {
            src: Iosfa,
            alt: 'Iosfa'
        },
        {
            src: JerarquicosSalud,
            alt: 'Jerarquicos Salud'
        },
        {
            src: Medicus,
            alt: 'Medicus'
        },
        {
            src: MutualMedicaRioCuarto,
            alt: 'Mutual Medica Rio Cuarto'
        },
        {
            src: ObraSocialWilliamHope,
            alt: 'Obra Social William Hope'
        },
        {
            src: Osadef,
            alt: 'Osadef'
        },
        {
            src: oscearaSalud,
            alt: 'osceara Salud'
        },
        {
            src: Osdop,
            alt: 'Osdop'
        },
        {
            src: Osme,
            alt: 'Osme'
        },
        {
            src: Ospes,
            alt: 'Ospes'
        },
        {
            src: Ospil,
            alt: 'Ospil'
        },
        {
            src: Ospim,
            alt: 'Ospim'
        },
        {
            src: Ospip,
            alt: 'Ospip'
        },
        {
            src: Ospjn,
            alt: 'Ospjn'
        },
        {
            src: Ospla,
            alt: 'Ospla'
        },
        {
            src: Osrja,
            alt: 'Osrja'
        },
        {
            src: PoliciaFederal,
            alt: 'Policia Federal'
        },
        {
            src: ProvinciaArt,
            alt: 'Provincia Art'
        },
        {
            src: RedArgentinaDeSalud,
            alt: 'Red Argentina De Salud'
        },
        {
            src: Sadaic,
            alt: 'Sadaic'
        },
        {
            src: TvSalud,
            alt: 'Tv Salud'
        },
    ]

    const [expanded, setExpanded] = useState(false);

    return (
        <div className='grid-container'>
            <div className='title-container'>
                <h2 className='title'>Obras Sociales</h2>
                <p className='subtitle'>Trabajamos con las siguientes obras sociales</p>
            </div>
            <div className='grid-content'>
                <div className='grid-imgs'>
                    {ObSoc.map((img, index)=>(
                        <img 
                            className={
                                index < 10 ?
                                'show'
                                :
                                (
                                  expanded ? 'show':'hide'
                                )
                            }
                            key={index} 
                            src={img.src} 
                            alt={img.alt} 
                            width='200px' 
                            height='200px'
                        />
                    ))}
                </div>
                <div 
                    className='expand-btn' 
                    onClick={() => 
                        setExpanded(!expanded)
                    }
                >
                    <span>{expanded ? 'Colapsar':'Expandir'}</span>
                    {expanded ? <AiFillCaretUp/>:<AiFillCaretDown/>}
                </div>
            </div>
        </div>
    )
}

export default ExpandGrid
