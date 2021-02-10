import * as ActionType from "./ActionTypes";

export const Chefs = (state = {
    isLoading: true,
    errMsg: null,
    chefs: []
}, action) => {
    switch (action.type) {
        case ActionType.CHEFS_LOADING:
            return { ...state, isLoading: true, errMsg: null, chefs: [] };

        case ActionType.ADD_CHEFS:
            return { ...state, isLoading: false, errMsg: null, chefs: action.payload };

        case ActionType.CHEFS_FAILED:
            return { ...state, isLoading: false, errMsg: action.payload, chefs: [] };

        default:
            return state;
    }
};