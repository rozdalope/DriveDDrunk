import { ADD_CAR } from '../types';
import axios from 'axios';


const initialState = {
    car: []
}

const API = "http://localhost:8005/api/v1"

function carReducer(state = initialState, action) {

    switch (action.type) {
        case ADD_CAR:
            const newCar = action.payload;
            axios.post(`${API}/cars`, newCar).then(result => {
                alert(result.data.status);
            });
            return { ...state, car: [...state.car, newCar] };
        default:
            return state;
    };
}

export default carReducer;