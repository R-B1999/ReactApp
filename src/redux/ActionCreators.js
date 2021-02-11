import * as ActionType from "./ActionTypes";
import { baseUrl } from "../shared/baseurl";
import { toast } from "react-toastify";

export const addComment = (comment) => ({
    type: ActionType.ADD_COMMENT,
    payload: comment
});

export const addFeedback = (values) => (dispatch) => {
    const newFeedback = {
        firstName: values.firstname,
        lastName: values.lastname,
        contactNo: values.contact,
        email: values.email,
        agree: values.agree,
        contactType: values.contactType,
        feedback: values.message
    }
    newFeedback.date = new Date().toISOString();
    return fetch(baseUrl + 'feedback', {
        method: 'POST',
        body: JSON.stringify(newFeedback),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: "same-origin"
    }).then(response => {
        if (response.ok) {
            return toast.success("Feedback submitted", {position: toast.POSITION.TOP_CENTER});
        } else {
            let error = new Error("Error " + response.status + ":" + response.statusText);
            error.response = response;
            throw error;
        }
    }, err => {
        let errMsg = new Error(err.message);
        console.error(errMsg);
        throw errMsg;
    }).catch(err => {
        toast.error("ERROR : feedback not submitted.", {position: toast.POSITION.TOP_CENTER})
    });
}

export const postComment = (dishId, rating, author, comment) => (dispatch) => {
    const newComment = {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
    newComment.date = new Date().toISOString();
    return fetch(baseUrl + 'comments', {
        method: 'POST',
        body: JSON.stringify(newComment),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: "same-origin"
    }).then(response => {
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
    }).then(comment => {
        dispatch(addComment(comment))
    }).catch(err => {
        dispatch(dishesFailed(err.message))
    });
}

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

const dishesLoading = () => ({
    type: ActionType.DISHES_LOADING
});

const dishesFailed = (errMsg) => ({
    type: ActionType.DISHES_FAILED,
    payload: errMsg
});

const addDishes = (dishes) => ({
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

const chefsLoading = () => ({
    type: ActionType.CHEFS_LOADING
});

const chefsFailed = (errMsg) => ({
    type: ActionType.CHEFS_FAILED,
    payload: errMsg
});

const addChefs = (chefs) => ({
    type: ActionType.ADD_CHEFS,
    payload: chefs
});


export const fetchComments = (dishId) => (dispatch) => {
    return fetch(baseUrl + 'comments').then(response => {
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
    }).then(comments => {
        dispatch(addComments(comments))
    }).catch(err => {
        dispatch(commentsFailed(err.message))
    });

};

const addComments = (comments) => ({
    type: ActionType.ADD_COMMENTS,
    payload: comments
});

const commentsFailed = (errMsg) => ({
    type: ActionType.COMMENTS_FAILED,
    payload: errMsg
});