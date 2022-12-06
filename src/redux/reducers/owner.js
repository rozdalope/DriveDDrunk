import { CREATE_OWNER } from '../types';
import axios from 'axios';

const initialState = {
    isLoggedIn: false,
    owner: null,
    allOwners: []
}


const API = "http://localhost:8005/api/v1"

const ownerReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_OWNER:
            const newOwner = action.payload;
            axios.post(`${API}/auth/owner/register`, newOwner).then(result => {
                alert(result.data.status);
            });
            return { ...state, allOwners: [...state.allOwners, newOwner] };
        default:
            return state;
    };
}

export default ownerReducer;
