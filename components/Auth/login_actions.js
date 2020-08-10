//example of initializeApp()

import {
    INITIALIZE_APP, 
    CHECK_REMEMBER_ME, 
    TOGGLE_REMEMBER_ME, 
    LOGIN_INITIALIZE, 
    LOGIN_SUCCESS, 
    LOGIN_FAIL, 
    LOGOUT
} from './login_types'; 
import { AsyncStorage } from 'react-native';

//INITIALIZE APP 
//No try/catch and LOGIN_FAIL NOT HOOKED 
//if JWT valid, navigate user to WeLoggedIn
export const initializeApp = () => {
    return async (dispatch) => {
        dispatch ({type: INITIALIZE_APP})

        const user = await AsyncStorage.getItem('token')
                    .catch(err => dispatch ({ type: LOGIN_FAIL, payload: err}))

            if (!user) return dispatch ({type: LOGIN_FAIL, payload: 'No Token'})

            return dispatch ({
                type: LOGIN_SUCCESS, 
                payload: user
            })
        //navigation.navigate('WeLoggedIn)
        //Pass navigation into function if you want

    }
}
