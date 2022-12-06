import { CREATE_BOOKING } from '../types';

const initialState = {
    booking: []
}

function bookingReducer(state = initialState, { type, payload = null }) {
    switch (type) {
        case CREATE_BOOKING:
            return createBooking(state, payload);
        default:
            return state;
    }
}

function createBooking(state, payload) {
    return {
        ...state,
        booking: payload
    }
}

export default bookingReducer;