import {LOAD_LOCATION, LOAD_LOCATIONS} from "../actionTypes";

export const loadLocations = (locations) => ({type: LOAD_LOCATIONS, locations});
export const loadLocation = (location) => ({type: LOAD_LOCATION, location});
