const centerMaps = (selectedRoute: any) => {
  return selectedRoute?.polyline?.length
    ? selectedRoute.polyline[0]
    : [59.84660399, 30.29496392];
};
export default centerMaps;
