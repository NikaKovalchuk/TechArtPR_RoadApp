const initialState = {
    location: {},
    list: [],
    schema: [
        {"id": "name", "label": "Название", format: value => value.toLocaleString()},
        {"id": "formatted_address", "label": "Адресс", format: value => value.toLocaleString()},
        {"id": "price_level", "label": "Цена", format: value => "$".repeat(value)},
        {"id": "rating", "label": "Оценка", minWidth: 10},
    ],
};


export default function locations(state = initialState, action) {
    switch (action.type) {
        case 'LOAD_LOCATIONS':
            return {...state, list: action.locations};

        case 'LOAD_LOCATION':
            return {...state, location: action.location};

        default:
            return state;
    }
}
