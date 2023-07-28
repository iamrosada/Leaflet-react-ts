import { MapContainer, TileLayer, Marker, Polyline } from "react-leaflet";
import MapContent from "@/components/MapContent";
import boundsMaps from "@/utilities/bounds";
import centerMaps from "@/utilities/centerMaps";

const MapComponent = ({ selectedRoute }: any) => {
  const center = centerMaps(selectedRoute);

  const bounds = boundsMaps(selectedRoute);

  return (
    <MapContainer center={center} zoom={8}>
      <MapContent bounds={bounds} />
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
