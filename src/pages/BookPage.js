import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import PagesHeader from '../components/PagesHeader';
import driverData from '../data/drivers.json';
import { Icon } from "leaflet";
import { FaUserCircle } from "react-icons/fa";
import Searchbar from '../components/Searchbar';
import '../styles/LeafletStyles.css'

export const icon = new Icon({
    icon: <FaUserCircle />,
    iconSize: [70, 70]
})


const BookPage = () => {

    const [activeDriver, setActiveDriver] = useState(null);

    function LocationMarker() {
        const [position, setPosition] = useState(null)
        const maps = useMapEvents({
            click() {
                maps.locate({
                    setView: true
                });
            },
            locationfound(e) {
                setPosition(e.latlng)
                maps.flyTo(e.latlng, maps.getZoom())
            },
        })

        return position === null ? null : (
            <Marker position={position}>
                <Popup>You are here</Popup>
            </Marker>
        )
    }

    return (
        <div>
            <PagesHeader />
            <Searchbar />
            <div className='dest-address'></div>
            <div className='map-container'>
                <MapContainer
                    center={{ lat: 16.417164140719713, lng: 120.6132593411044 }}
                    zoom={13}
                    scrollWheelZoom={true}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {driverData.map(drivers => (
                        <Marker
                            key={drivers._id.$oid}
                            position={
                                [
                                    drivers.latitude,
                                    drivers.longitude
                                ]}
                            onClick={() => {
                                setActiveDriver(drivers);
                            }}
                        >
                            <Popup>
                                <FaUserCircle className='icon' />
                                <h2>{drivers.firstName} {drivers.lastName}<br />
                                    {drivers.phoneNumber}</h2>
                            </Popup>
                        </Marker>
                    ))}

                    {activeDriver && (
                        <Popup position={[
                            activeDriver.latitude,
                            activeDriver.longitude
                        ]} onClose={() => {
                            setActiveDriver(null)
                        }}>
                            <div>
                            </div>
                        </Popup>
                    )}
                    <LocationMarker />
                </MapContainer>
                <div className='btn-book overlay'>
                    <button className='btn-book-driver'>
                        Find nearby drivers

                    </button>
                </div>
            </div>
        </div >
    )
}

export default BookPage;