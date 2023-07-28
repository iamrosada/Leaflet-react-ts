import { MapContainer, TileLayer, Marker, Polyline } from "react-leaflet";
import MapContent from "@/components/MapContent";

const MapComponent = ({ selectedRoute }: any) => {
  const center = selectedRoute?.polyline?.length
    ? selectedRoute.polyline[0]
    : [59.84660399, 30.29496392];

  const bounds =
    selectedRoute?.polyline?.length > 0
      ? selectedRoute.polyline.map((point: number[]) => [point[0], point[1]])
      : [
          [59.84660399, 30.29496392],
          [59.84660399, 30.29496392],
        ];

  return (
    <MapContainer
      center={center}
      zoom={13}
      style={{ height: "400px", width: "600px" }}
    >
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
