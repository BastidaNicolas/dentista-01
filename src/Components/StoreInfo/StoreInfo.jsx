import React from 'react';
import { SiGooglestreetview } from 'react-icons/si'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './storeInfo.css';

const StoreInfo = () => {

    return (
        <div className='info-map-container'>
            <div className='info-container'>
                <div className='info'>
                    <h2>Córdoba - Capital</h2>
                    <a
                        href='https://www.google.com/maps/dir//Consultorio+Odontol%C3%B3gico+Dra.+Claudia+A.+Cuello,+Ambargasta+2670,+C%C3%B3rdoba/@-31.4399407,-64.1248825,20.75z/data=!4m8!4m7!1m0!1m5!1m1!1s0x9432bd202f160315:0x26408a071fcc3881!2m2!1d-64.1246572!2d-31.4399747'
                        target='_blank'
                        rel="noreferrer"
                    >
                        <SiGooglestreetview/> Ambargasta 2670, Barrio Empalme, Córdoba Capital, Córdoba
                    </a>
                    <h3>Horarios:</h3>
                    <ul>
                        <li>Lunes: 10 a 19hrs</li>
                        <li>Jueves: 14 a 19hrs</li>
                    </ul>
                    <br />
                    <h2>Córdoba - Salsipuedes</h2>
                    <a
                        href="https://www.google.com/maps/dir//Consultorio+Odontol%C3%B3gico+Dra.+Claudia+A.+Cuello,+Tucum%C3%A1n+45,+Barrio+VillaSol,+X5113+Salsipuedes,+C%C3%B3rdoba/@-31.126391,-64.2945698,18.75z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94328059de715e93:0x9b7781d8fead5424!2m2!1d-64.2937666!2d-31.1262488"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <SiGooglestreetview/> Tucumán 45, Barrio VillaSol, Salsipuedes, Córdoba
                    </a>
                    <h3>Horarios:</h3>
                    <ul>
                        <li>Martes: 10 a 18hrs</li>
                        <li>Miércoles: 14 a 19hrs</li>
                        <li>Viernes: 14 a 19hrs</li>
                    </ul>
                </div>
            </div>
            <div className='map-container'>
                <div id="map">
                    <MapContainer center={[-31.310235, -64.234314]} zoom={11} scrollWheelZoom={true}>
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[-31.126211, -64.293746]}>
                            <Popup>
                                Córdoba - Salsipuedes
                            </Popup>
                        </Marker>
                        <Marker position={[-31.4400606,-64.1249283]}>
                            <Popup>
                                Córdoba - Capital
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </div>
    )
}

export default StoreInfo
