import React from "react";
import L from 'leaflet'
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import RoutineMachine from "./RoutineMachine";
import { useSelector } from 'react-redux';
import "leaflet-routing-machine";
require('leaflet.animatedmarker/src/AnimatedMarker');



const Map = () => {

  const { cordinate } = useSelector((state) => state.setCord);










  function getIcon (size){
    return L.icon({
      iconUrl:require('./car.png'),
      iconSize:size,
      iconAnchor: [10, 10],

    })
  }



  return (
    <>
      <MapContainer
        doubleClickZoom={false}
        id="mapId"
        zoom={3000}
        center={[33.5024, 36.2988]}
      >

        <Marker position={cordinate} icon={getIcon()}></Marker>
        <TileLayer
          url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"
        />
        <RoutineMachine />
      </MapContainer>

    </>
  );
};

export default Map;
