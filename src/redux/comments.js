import * as ActionType from "./ActionTypes";

export const Comments = (state = {
    errMsg: null,
    comments: []
}, action) => {
    switch (action.type) {
        case ActionType.ADD_COMMENTS:
            return { ...state, errMsg: null, comments: action.payload };

        case ActionType.COMMENTS_FAILED:
            return { ...state, errMsg: action.payload, commennts: [] };

        case ActionType.ADD_COMMENT:
            let comment = action.payload;
            // comment.id = state.length;
            // comment.date = new Date().toISOString();
            return { ...state, comments: state.comments.concat(comment), errMsg: null };

        default:
            return state;
    }
};