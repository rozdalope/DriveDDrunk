import { CREATE_OWNER, GET_OWNER, UPDATE_OWNER } from '../types';

export function createOwner(data) {
    return function (dispatch) {
        return api
            .createOwner(data)
            .then(
                response => dispatch(createOwnerSuccess(response)),
                error => dispatch(ajaxCallError(error))
            );
    }
}

function createOwnerSuccess(data) {
    return {
        type: CREATE_OWNER,
        payload: data || {}
    }
}

export function updateOwner(data) {
    return function (dispatch) {
        return api
            .updateOwner(data)
            .then(
                response => dispatch(updateOwnerSuccess(response)),
                error => dispatch(ajaxCallError(error))
            );
    }

    function updateOwnerSuccess(data) {
        return {
            type: UPDATE_OWNER,
            payload: data || {}
        }
    }
}

export function getOnwer(data) {
    return function (dispatch) {
        return api
            .getOwner(data)
            .then(
                response => dispatch(getOwnerSuccess(response)),
                error => dispatch(ajaxCallError(error))
            );
    }
}

function getOwnerSuccess(data) {
    return {
        type: GET_OWNER,
        payload: data || {}
    }
}