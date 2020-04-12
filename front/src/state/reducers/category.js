const initialState = {
    errors: null,
    list: [],
    schema: [
        {"id": "title", "label": "Название", minWidth: 100},
        {"id": "icon", "label": "Логотип"},
    ],
    category: null,
    order: null,
    orderBy: null,
};


export default function routes(state = initialState, action) {

    switch (action.type) {
        case 'FETCH_CATEGORIES_SUCCESS':
            console.log(action.list)
            return {...state, list: action.list, pending: false, category: null};

        case 'FETCH_CATEGORY_SUCCESS':
            return {...state, category: action.category};

        default:
            return state;
    }
}
