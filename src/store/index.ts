import { configureStore } from "@reduxjs/toolkit";
import routeReducer from "../reducers/routeReducer";
import createSagaMiddleware from "redux-saga";
import { watchFetchPolyline } from "@/sagas/routeSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    route: routeReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(watchFetchPolyline);
export default store;
