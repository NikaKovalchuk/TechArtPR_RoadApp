import {FETCH_ROUTE_SUCCESS, FETCH_ROUTES_SUCCESS} from "../actionTypes";

const initialState = {
    list: [],
    route: {},
    schema: [
        {"id": "title", "label": "Название", format: value => value.toLocaleString()},
        {"id": "description", "label": "Описание", minWidth: 150},
    ],
};


export default function routes(state = initialState, action) {

    switch (action.type) {
        case FETCH_ROUTES_SUCCESS:
            return {...state, list: action.list};

        case FETCH_ROUTE_SUCCESS:
            return {...state, route: action.route};

        default:
            return state;
    }
}
