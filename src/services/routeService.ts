import axios from "axios";
import polyline from "@mapbox/polyline";

const API_BASE_URL = "http://router.project-osrm.org";

export async function getPolylineFromAPI(markers: any) {
  const profile = "driving";
  const coordinates = markers
    .map((marker: any) => `${marker[1]},${marker[0]}`)
    .join(";");
  const url = `${API_BASE_URL}/route/v1/${profile}/${coordinates}`;

  try {
    const response = await axios.get(url);

    if (response.status === 200 && response.data.code === "Ok") {
      const polylineString = response.data.routes[0].geometry;
      const decodedCoordinates = polyline.decode(polylineString);
      return decodedCoordinates.map((coord) => [coord[1], coord[0]]);
    } else {
      console.error("Error fetching route data:", response.data);
      return [];
    }
  } catch (error) {
    console.error("Error fetching route data:", error);
    return [];
  }
}
