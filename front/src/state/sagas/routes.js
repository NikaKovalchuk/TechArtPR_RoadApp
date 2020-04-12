import {fetchRoutesSuccessful, fetchRouteSuccessful} from "../actions/route";
import {call, put, takeEvery} from "@redux-saga/core/effects";
import apiRequest from "../../lib/apiRequest";
import apiPrefix from "../../lib/apiPrefix";
import {ADD_ROUTE, DELETE_ROUTE, FETCH_ROUTE_PENDING, UPDATE_ROUTE} from "../actionTypes";

export function* loadRoutes() {
    const url = apiPrefix("route/");
    const response = yield call(apiRequest.get, url);
    yield put(fetchRoutesSuccessful(response));
}

export function* loadRoute({id}) {
    const url = apiPrefix("route/" + id + "/");
    const response = yield call(apiRequest.get, url);
    yield put(fetchRouteSuccessful(response));
}

export function* deleteRoute({id}) {
    const url = apiPrefix("route/" + id + "/");
    yield call(apiRequest.remove, url);
    yield loadRoutes();
}

export function* addRoute({route}) {
    const url = apiPrefix("route/");
    yield call(apiRequest.post, url, route);
    yield loadRoutes();
}

export function* updateRoute({id, route}) {
    const url = apiPrefix("route/" + id + "/");
    yield call(apiRequest.put, url, route);
    yield loadRoutes();
}

export function* watchRoutes() {
    yield takeEvery(FETCH_ROUTE_PENDING, loadRoute);
    yield takeEvery(DELETE_ROUTE, deleteRoute);
    yield takeEvery(ADD_ROUTE, addRoute);
    yield takeEvery(UPDATE_ROUTE, updateRoute);
}
