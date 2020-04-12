import {
    ADD_ROUTE,
    DELETE_ROUTE,
    FETCH_ROUTE_PENDING,
    FETCH_ROUTE_SUCCESS,
    FETCH_ROUTES_SUCCESS,
    UPDATE_ROUTE
} from "../actionTypes";

export const fetchRoute = (id) => ({type: FETCH_ROUTE_PENDING, id});
export const addRoute = (route) => ({type: ADD_ROUTE, route});
export const updateRoute = (id, route) => ({type: UPDATE_ROUTE, id, route});
export const deleteRoute = (id) => ({type: DELETE_ROUTE, id});
export const fetchRouteSuccessful = (route) => ({type: FETCH_ROUTE_SUCCESS, route});

export const fetchRoutesSuccessful = (list) => ({type: FETCH_ROUTES_SUCCESS, list});
