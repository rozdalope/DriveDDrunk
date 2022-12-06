import { ADD_DRIVER, GET_DRIVER, LOGIN_DRIVER, LOGOUT_DRIVER, UPDATE_DRIVER } from '../types';

const initialState = {
    isLoggedIn: false,
    driver: null,
}

const driverReducer = (state = initialState, { type, payload = null }) => {
    switch (type) {
        case ADD_DRIVER:
            return addDriver(state, payload);
        case LOGIN_DRIVER:
            return loginDriver(state, payload);
        case LOGOUT_DRIVER:
            return logoutDriver(state, payload);
        case GET_DRIVER:
            return getDriver(state, payload);
        case UPDATE_DRIVER:
            return updatesDriver(state, payload);
        default:
            return state;
    };
}


const addDriver = (state, payload) => {
    return {
        ...state,
        driver: payload
    };
}

const loginDriver = (state, payload) => {
    return {
        ...state,
        isLoggedIn: true,
    };
}

const logoutDriver = (state, payload) => {
    return {
        ...state,
        isLoggedIn: false,
    };
}

const getDriver = (state, payload) => {
    return {
        ...state,
        driver: payload.data
    };
}

const updatesDriver = (state, payload) => {
    return {
        ...state,
        driver: payload.data
    };
}

export default driverReducer;
