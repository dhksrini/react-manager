import {EMAIL_CHANGED, PASSWORD_CHANGED, USER_LOGINSUCCESS, USER_LOGIN_FAIL, LOGIN_SPINNER} from '../actions/types';

const INITIAL_STATE = { 
    email: '',
    password: '',
    user: null,
    error: '',
    loading: false
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case EMAIL_CHANGED: 
            return { ...state, email: action.payload }
        case PASSWORD_CHANGED: 
            return { ...state, password: action.payload }
        case LOGIN_SPINNER:
            return {...state, loading: true, error: ''}
        case USER_LOGINSUCCESS: 
            return { ...state, user: action.payload, error: '', loading: false }
        case USER_LOGIN_FAIL:
            return {...state, error: 'Authondication fail', password: '', loading: false }
        default: 
            return state;
    }
}