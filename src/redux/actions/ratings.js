import { ADD_RATING, UPDATE_RATING, GET_RATING, DELETE_RATING } from '../types';

export function addRating(data) {
    return function (dispatch) {
        return api
            .addRating(data)
            .then(
                response => dispatch(addRatingSuccess(response)),
                error => dispatch(ajaxCallError(error))
            );
    }
}

function addRatingSuccess(data) {
    return {
        type: ADD_RATING,
        payload: data || {}
    }
}


export function updateRating(data) {
    return function (dispatch) {
        return api
            .updateDriver(data)
            .then(
                response => dispatch(updateDriverSuccess(response)),
                error => dispatch(ajaxCallError(error))
            );
    }

    function updateDriverSuccess(data) {
        return {
            type: UPDATE_DRIVER,
            payload: data || {}
        }
    }
}

export function getDriver(data) {
    return function (dispatch) {
        return api
            .getDriver(data)
            .then(
                response => dispatch(getDriverSuccess(response)),
                error => dispatch(ajaxCallError(error))
            );
    }
}

function getDriverSuccess(data) {
    return {
        type: GET_DRIVER,
        payload: data || {}
    }
}

export const DELETE = (id) => {
    return {
        type: DELETE_RATING,
        payload: { id },
    }
}
