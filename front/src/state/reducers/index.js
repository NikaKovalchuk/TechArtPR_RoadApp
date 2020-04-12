import {combineReducers} from 'redux';
import routes from "./routes";
import locations from "./locations";
import category from "./category";

export const reducers = combineReducers({
    routes,
    locations,
    category,
});
