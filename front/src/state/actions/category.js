import {
    ADD_CATEGORY,
    DELETE_CATEGORY,
    FETCH_CATEGORIES_PENDING,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_CATEGORY,
    FETCH_CATEGORY_SUCCESS,
    UPDATE_CATEGORY,
} from "../actionTypes";

export const fetchCategories = () => ({type: FETCH_CATEGORIES_PENDING});
export const fetchCategoriesSuccessful = (list) => ({type: FETCH_CATEGORIES_SUCCESS, list});

export const fetchCategory = (id) => ({type: FETCH_CATEGORY, id});
export const fetchCategorySuccessful = (category) => ({type: FETCH_CATEGORY_SUCCESS, category});
export const addCategory = (category) => ({type: ADD_CATEGORY, category});
export const updateCategory = (id, category) => ({type: UPDATE_CATEGORY, id, category});
export const deleteCategory = (id) => ({type: DELETE_CATEGORY, id});
