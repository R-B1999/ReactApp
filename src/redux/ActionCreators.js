import * as ActionType from "./ActionTypes";
import { baseUrl } from "../shared/baseurl";

export const addComment = (dishId, rating, author, comment) => ({
    type: ActionType.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});

export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));

    return fetch(baseUrl + 'dishes').then(response => {
        if (response.ok) {
            return response.json();
        } else {
            let error = new Error("Error " + response.status + ":" + response.statusText);
            error.response = response;
            throw error;
        }
    }, err => {
        let errMsg = new Error(err.message);
        console.error(errMsg);
        throw errMsg;
    }).then(dishes => {
        dispatch(addDishes(dishes))
    }).catch(err => {
        dispatch(dishesFailed(err.message))
    });

};

export const dishesLoading = () => ({
    type: ActionType.DISHES_LOADING
});

export const dishesFailed = (errMsg) => ({
    type: ActionType.DISHES_FAILED,
    payload: errMsg
});

export const addDishes = (dishes) => ({
    type: ActionType.ADD_DISHES,
    payload: dishes
});

export const fetchChefs = () => (dispatch) => {
    dispatch(chefsLoading(true));

    return fetch(baseUrl + 'chefs').then(response => {
        if (response.ok) {
            return response.json();
        } else {
            let error = new Error("Error " + response.status + ":" + response.statusText);
            error.response = response;
            throw error;
        }
    }, err => {
        let errMsg = new Error(err.message);
        console.error(errMsg);
        throw errMsg;
    }).then(chefs => {
        dispatch(addChefs(chefs))
    }).catch(err => {
        dispatch(chefsFailed(err.message))
    });

};

export const chefsLoading = () => ({
    type: ActionType.CHEFS_LOADING
});

export const chefsFailed = (errMsg) => ({
    type: ActionType.CHEFS_FAILED,
    payload: errMsg
});

export const addChefs = (chefs) => ({
    type: ActionType.ADD_CHEFS,
    payload: chefs
});