import {call, put, takeEvery} from "@redux-saga/core/effects";
import apiRequest from "../../lib/apiRequest";
import apiPrefix from "../../lib/apiPrefix";
import {ADD_CATEGORY, DELETE_CATEGORY, FETCH_CATEGORIES_PENDING, FETCH_CATEGORY, UPDATE_CATEGORY} from "../actionTypes";
import {fetchCategoriesSuccessful, fetchCategorySuccessful} from "../actions/category";

const listApi = "category/";
const elementApi = (id) => ("category/" + id + "/");

function* locationBase(id, method, body = null) {
    const url = apiPrefix(elementApi(id));
    const response = body ? yield call(method, url, body) : yield call(method, url);
    yield put(fetchCategorySuccessful(response));
}


export function* loadCategories() {
    const url = apiPrefix(listApi);
    const response = yield call(apiRequest.get, url);
    yield put(fetchCategoriesSuccessful(response));
}

export function* addCategory({category}) {
    const url = apiPrefix(listApi);
    console.log(url)
    yield call(apiRequest.post, url, category);
    yield loadCategories();
}

export function* loadCategory({id}) {
    yield locationBase(id, apiRequest.get)
}

export function* updateCategory({id, category}) {
    yield locationBase(id, apiRequest.put, category);
    yield loadCategories();
}

export function* deleteCategory({id}) {
    yield locationBase(id, apiRequest.remove)
}

export function* watchCategories() {
    yield takeEvery(FETCH_CATEGORIES_PENDING, loadCategories);
    yield takeEvery(ADD_CATEGORY, addCategory);
    yield takeEvery(UPDATE_CATEGORY, updateCategory);
    yield takeEvery(DELETE_CATEGORY, deleteCategory);
    yield takeEvery(FETCH_CATEGORY, loadCategory);
}
