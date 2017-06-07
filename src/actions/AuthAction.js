import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import {EMAIL_CHANGED, PASSWORD_CHANGED, USER_LOGINSUCCESS, USER_LOGIN_FAIL, LOGIN_SPINNER} from './types';

export const emailChanged = (text) => {
    return{
        type: EMAIL_CHANGED,
        payload: text
    }
}

export const passwordChanged = (text) => {
    return{
        type: PASSWORD_CHANGED,
        payload: text
    }
}

export const loginUser = ({email, password}) => {
    return (dispatch) => {
        dispatch({
            type: LOGIN_SPINNER, loading: true
        });
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then( user => {
                userLoginSuccess(dispatch);
                alert('Hi you logged successfully..');
                console.log('Hi you logged successfully..');
            })
            .catch( (error) => {
                console.log(error);
                userLoginFail(dispatch);
            })
    };
};

const userLoginFail = (dispatch) => {
    dispatch({
        type: USER_LOGIN_FAIL
    })
}

const userLoginSuccess = (dispatch, user) => {
    dispatch({
        type: USER_LOGINSUCCESS,
        payload: user 
    })

    Actions.main();
}