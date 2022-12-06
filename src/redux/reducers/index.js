import { combineReducers } from 'redux';
import owner from './owner';
import booking from './booking';
import driver from './driver';
import car from './car';

export default combineReducers({
    owner,
    booking,
    driver,
    car
})