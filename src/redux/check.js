const fetch = require('cross-fetch');
const { addDishes, dishesFailed } = require('./ActionCreators');
// const fetch = new cf();

const baseUrl = "http://localhost:3001/";

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