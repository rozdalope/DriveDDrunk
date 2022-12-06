import { CREATE_BOOKING, GET_BOOKING } from '../types';

export function createBooking(data) {
    return function (dispatch) {
        return api
            .createBooking(data)
            .then(
                response => dispatch(createBookingSuccess(response)),
                error => dispatch(ajaxCallError(error))
            );
    }
}

function createBookingSuccess(data) {
    return {
        type: CREATE_BOOKING,
        payload: data || {}
    }
}

export function getBooking(data) {
    return function (dispatch) {
        return api
            .getBooking(data)
            .then(
                response => dispatch(getBookingSuccess(response)),
                error => dispatch(ajaxCallError(error))
            );
    }
}

function getBookingSuccess(data) {
    return {
        type: GET_BOOKING,
        payload: data || {}
    }
}
