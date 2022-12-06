import { ADD_DRIVER, UPDATE_DRIVER, GET_DRIVER } from '../types';

export function createDriver(data) {
    return function (dispatch) {
        return api
            .createDriver(data)
            .then(
                response => dispatch(createDriverSuccess(response)),
                error => dispatch(ajaxCallError(error))
            );
    }
}

function createDriverSuccess(data) {
    return {
        type: ADD_DRIVER,
        payload: data || {}
    }
}


export function updateDriver(data) {
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