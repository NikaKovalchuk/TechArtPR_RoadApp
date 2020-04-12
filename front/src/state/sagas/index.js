import {all, fork} from "redux-saga/effects";
import {loadRoutes, watchRoutes} from "./routes";
import {loadCategories, watchCategories} from "./category";

export function* sagas() {
    yield all([
        fork(watchRoutes),
        fork(watchCategories),
        fork(loadRoutes),
        fork(loadCategories),
    ]);
}
