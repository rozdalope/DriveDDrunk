import React, { useState } from 'react'

import { Map, TileLayer } from 'react-leaflet';

const Maps = (props) => {

    const successfulLookup = position => {
        const { latitude, longitude } = position.coords;
        fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=9dad9a1e64b84501a6b5b9d061f5e246`)
            .then(response => response.json()
                .then(console.log));

        window.navigator.geolocation.getCurrentPosition(successfulLookup, console.log);

        const [center, setCenter] = useState({ lat: currLat, long: currLong });
        const ZOON_LEVEL = 10;
        // const { location, destination, setDestination, setRideMetrics } = props;
        // const latitude = location.coords.latitude;
        // const longitude = location.coords.longitude;

        // const mapView = React.createRef();
        // const animateMap = (destination) => {
        //     mapView.current.fitToCoordinates(
        //         [location.coords, destination],
        //         {
        //             edgePadding: {
        //                 top: 150,
        //                 right: 50,
        //                 bottom: 150,
        //                 left: 50
        //             }
        //         }
        //     )
        // }

        // const handleMapPress = (event) => {
        //     setDestination(event.nativeEvent.coordinate);
        //     animateMap(event.nativeEvent.coordinate);
        // }


        return (
            <div>
                <h2>React-leaflet - Basic Openstreet Map</h2>
                <p>Loading basic map using layer from maptiler</p>
                <div className='col'>
                    <Map>
                    </Map>
                </div>
            </div>
        )
    }
}

export default Maps