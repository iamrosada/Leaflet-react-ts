import { useDispatch, useSelector } from "react-redux";
import MapComponent from "./components/MapComponent";
import RouteTable from "./components/RouteTable";
import { useEffect } from "react";
import { setSelectedRouteId } from "./reducers/routeReducer";

function App() {
  const routes = useSelector((state: any) => state.route.routes);
  const selectedRouteId = useSelector(
    (state: any) => state.route.selectedRouteId
  );
  const selectedRoute = routes[selectedRouteId];
  const dispatch = useDispatch();
  console.log(selectedRoute, "from APP");
  useEffect(() => {
    if (selectedRoute && !selectedRoute.polyline) {
      dispatch({
        type: "route/fetchPolyline",
        payload: { routeId: selectedRouteId, markers: selectedRoute.markers },
      });
    }
  }, [dispatch, selectedRoute, selectedRouteId]);

  const handleRowClick = (index: any) => {
    dispatch(setSelectedRouteId(index));
  };
  return (
    <div className="container">
      <MapComponent selectedRoute={selectedRoute} />
      <RouteTable
        routes={routes}
        selectedRouteId={selectedRouteId}
        onRowClick={handleRowClick}
      />
    </div>
  );
}

export default App;
