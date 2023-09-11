import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '95%', // Usa el 100% del ancho disponible
    height: '500px' // Establece la altura deseada
  };

const center = {
  lat: 6.349400,
  lng: -75.513954
};

const marker = {
  lat: 6.349400,
  lng: -75.513954
};

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyA6fJSiujN4tO3tRHISaSTI4IMFTpAL0Ec'
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    <div style={{ position: 'relative' }} data-aos="fade-right" data-aos-delay="">
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={18} // Este es el zoom configurado
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          <Marker position={marker} />
        </GoogleMap>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Map;
