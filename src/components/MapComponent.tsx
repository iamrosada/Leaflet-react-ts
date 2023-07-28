import { MapContainer, TileLayer, Marker, Polyline } from "react-leaflet";

const MapComponent = ({ selectedRoute }: any) => {
  const center = selectedRoute?.polyline?.length
    ? selectedRoute.polyline[0]
    : [59.84660399, 30.29496392];
  console.log("selectedRoute.polyline[0]", selectedRoute);
  return (
    <MapContainer center={center} zoom={13}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {selectedRoute?.polyline && (
        <Polyline positions={selectedRoute.polyline} color="red" />
      )}
      {selectedRoute?.markers &&
        selectedRoute.markers.map((marker: any, index: any) => (
          <Marker key={index} position={marker} />
        ))}
    </MapContainer>
  );
};

export default MapComponent;
