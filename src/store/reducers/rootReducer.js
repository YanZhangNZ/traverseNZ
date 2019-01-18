import authReducer from './authReducer';
import projectReducer from './projectReducer';
import {combineReducers} from 'redux';

//combine reducers into one
const rootReducer = combineReducers({
    auth:authReducer,
    project:projectReducer,
})

export default rootReducer;