import { combineReducers } from "redux";
import ticketesReducer from './ticketesReducer';

export default combineReducers({
    ticketes:ticketesReducer
})

