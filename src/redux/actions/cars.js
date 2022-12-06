import { ADD_CAR, UPDATE_CAR, GET_CAR, DELETE_CAR } from '../types';

export function addCar(data) {
    return function (dispatch) {
        return api
            .addCar(data)
            .then(
                response => dispatch(addCarSuccess(response)),
                error => dispatch(ajaxCallError(error))
            );
    }
}

function addCarSuccess(data) {
    return {
        type: ADD_CAR,
        payload: data || {}
    }
}


export function updateCar(data) {
    return function (dispatch) {
        return api
            .updateCar(data)
            .then(
                response => dispatch(updateCarSuccess(response)),
                error => dispatch(ajaxCallError(error))
            );
    }

    function updateCarSuccess(data) {
        return {
            type: UPDATE_CAR,
            payload: data || {}
        }
    }
}

export function getCar(data) {
    return function (dispatch) {
        return api
            .getCar(data)
            .then(
                response => dispatch(getCarSuccess(response)),
                error => dispatch(ajaxCallError(error))
            );
    }
}

function getCarSuccess(data) {
    return {
        type: GET_CAR,
        payload: { data }
    }
}

export const DELETE = (id) => {
    return {
        type: DELETE_CAR,
        payload: { id },
    }
}
