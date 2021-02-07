import { DISHES } from '../shared/dishes';
import { COMMENTS } from "../shared/comments";

export const initialState = {
    dishes: DISHES,
    comments: COMMENTS
};

export const Reducer = (state = initialState, action) => {
    return (state);
}