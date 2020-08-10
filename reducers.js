//Reducer file 
import { combineReducers } from 'redux';

//standard reducer 
//Action types such as LOGIN_SUCCESS, LOGIN_FAIL 
import loginReducer from './components/Auth/login_reducer';
import navReducer from './navigation/nav_reducer';

export default combineReducers ({
    auth: loginReducer, 
    nav: navReducer
})