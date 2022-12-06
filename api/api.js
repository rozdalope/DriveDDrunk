import axios from 'axios';

const API = "http://localhost:8005/api/v1"

// OWNER
export function createOwner(data) {
    return axios.post(`${API}/owner/register`, data);
}

export function loginOwner(data) {
    return axios.post(`${API}/owner/login`, data);
}

export function getOwner(data) {
    return axios.get(`${API}/owner`, {
        headers: {
            token: data,
        },
    });
}

export function updateOwner(data) {
    return axios.put(`${API}/owners/`, data);
}

// DRIVER
export function createDriver(data) {
    return axios.post(`${API}/drivers/register`, data);
}

export function loginOwner(data) {
    return axios.post(`${API}/drivers/login`, data);
}

// BOOKINGS
export function createBooking(data) {
    return axios.post(`${API}/bookings`, data);
}

export function getBooking(data) {
    return axios.get(`${API}/bookings`, data);
}

// CARS
export function createCar(data) {
    return axios.post(`${API}/cars`, data);
}

export function updateCar(data) {
    return axios.put(`${API}/cars`, data);
}

export function getCar(data) {
    return axios.get(`${API}/cars`, data)
}

export function deleteCar(data) {
    return axios.delete(`${API}/cars`, data)
}

// RATINGS
export function createRating(data) {
    return axios.post(`${API}/ratings`, data);
}

export function updateRating(data) {
    return axios.put(`${API}/ratings`, data);
}

export function getRating(data) {
    return axios.get(`${API}/ratings`, data);
}