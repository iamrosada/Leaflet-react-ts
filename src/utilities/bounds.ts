const boundsMaps = (selectedRoute: any) => {
  return selectedRoute?.polyline?.length > 0
    ? selectedRoute.polyline.map((point: number[]) => [point[0], point[1]])
    : [
        [59.84660399, 30.29496392],
        [59.84660399, 30.29496392],
      ];
};

export default boundsMaps;
