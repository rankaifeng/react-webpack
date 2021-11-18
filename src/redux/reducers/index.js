import { combineReducers } from 'redux';
import loginStatus from './login'
import otherRequest from './other'

export default combineReducers({
    loginStatus,
    otherRequest
});
