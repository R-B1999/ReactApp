import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from "react-redux-form";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { Dishes } from "./dishes";
import { Comments } from "./comments";
import { Chefs } from "./chefs";
import { InitialFeedback } from './forms';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            chefs: Chefs,
            ...createForms({
                feedback: InitialFeedback
            })
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}