import { useEffect } from "react";
import { useMap } from "react-leaflet";

const MapContent = ({ bounds }: any) => {
  const map = useMap();

  useEffect(() => {
    if (bounds.length > 0) {
      map.fitBounds(bounds);
    }
  }, [map, bounds]);

  return null;
};

export default MapContent;
