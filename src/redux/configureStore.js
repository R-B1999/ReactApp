import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Dishes } from "./dishes";
import { Comments } from "./comments";
import { Chefs } from "./chefs";

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            chefs: Chefs
        })
    );
    return store;
}