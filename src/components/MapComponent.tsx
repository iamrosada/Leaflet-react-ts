/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";

interface MapComponentProps {
  routeName?: string;
  trackPoints?: number[][];
}

const MapComponent: React.FC<MapComponentProps> = () => {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    </MapContainer>
  );
};

export default MapComponent;
