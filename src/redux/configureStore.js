import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from "redux-logger";
import thunk from "redux-thunk";
import { Dishes } from "./dishes";
import { Comments } from "./comments";
import { Chefs } from "./chefs";

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            chefs: Chefs
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}