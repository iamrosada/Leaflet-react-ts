import axios from "axios";

const API_BASE_URL = "http://project-osrm.org/osrm";

export async function getPolylineFromAPI(markers: any) {
  const coordinates = markers
    .map((marker: any[]) => `${marker[1]},${marker[0]}`)
    .join(";");
  const response = await axios.get(
    `${API_BASE_URL}/route/v1/driving/${coordinates}`
  );
  return response.data.routes[0].geometry.coordinates.map((coord: any[]) => [
    coord[1],
    coord[0],
  ]);
}
