import React from 'react';
import {useJsApiLoader, GoogleMap, Marker} from '@react-google-maps/api'
const containerStyle = {
    width: '1296px',
    height: '1000px'
  }; // later figure out how to avoid hard-coding
  
  const center = {
    lat: 40.7127,
    lng: -74.0134 // initial zoom

  };
  
  export default function MyComponent() {
    const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY
    })
  
    const [map, setMap] = React.useState(null)
  
    const onLoad = React.useCallback(function callback(map) {
        const southwest = new window.google.maps.LatLng(40.7038, -74.0176);
        const northeast = new window.google.maps.LatLng(40.7209, -73.9814);
        const bounds = new window.google.maps.LatLngBounds(southwest, northeast);
      map.fitBounds(bounds);
  
      setMap(map)
    }, [])
  
    const onUnmount = React.useCallback(function callback(map) {
      setMap(null)
    }, [])

    var coordinateArr = [{ lat: 40.7127, lng: -74.0134 }, { lat: 40.7128, lng: -74.0061 }];

    return isLoaded ? (
        <div>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}
                >
                {coordinateArr.map(function(coordinate) { // iterate through the coordinateArr
                    return (
                        <Marker 
                            position={coordinate} // plot each coordinate
                            icon={Marker.icon}
                        />
                    )
                })}        
            </GoogleMap>
        </div>
        
    ) : <></>
  }
  




