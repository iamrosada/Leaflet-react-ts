import { call, put, takeLatest } from "redux-saga/effects";
import { setPolyline } from "../reducers/routeReducer";
import { getPolylineFromAPI } from "@/services/routeService";

function* fetchPolyline(action: any) {
  const { routeId, markers } = action.payload;
  try {
    const polyline = yield call(getPolylineFromAPI, markers);

    yield put(setPolyline({ routeId, polyline }));
  } catch (error) {
    let message = error as unknown as string;
    throw new Error(message);
  }
}

export function* watchFetchPolyline() {
  yield takeLatest("route/fetchPolyline", fetchPolyline);
}
