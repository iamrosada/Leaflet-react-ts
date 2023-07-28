import axios from "axios";
import decodePolyline from "@/utilities/decodePolyline";

const API_BASE_URL = "http://router.project-osrm.org";

export async function getPolylineFromAPI(markers: number[][]) {
  const profile = "driving";

  const coordinates = markers
    .map((marker: any) => `${marker[1]},${marker[0]}`)
    .join(";");

  const url = `${API_BASE_URL}/route/v1/${profile}/${coordinates}`;

  try {
    const response = await axios.get(url);

    if (response.status === 200 && response.data.code === "Ok") {
      const encoded = response.data.routes[0].geometry;

      const decodedCoordinates = decodePolyline(encoded);

      return decodedCoordinates.map((coord) => [
        coord.latitude,
        coord.longitude,
      ]);
    } else {
      console.error("Error fetching route data:", response.data);
      return [];
    }
  } catch (error) {
    console.error("Error fetching route data:", error);
    return [];
  }
}
