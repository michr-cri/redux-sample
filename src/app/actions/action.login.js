import LoginApi from '../apis/LoginApi';

export function authenticationSucceeded() {
    return {type: 'AUTHENTICATION_SUCCESS'};
}

export function authenticationFailed() {
    return {type: 'SHOW_ERROR_MESSAGE', payload: {title: 'title', message: 'message'}}
}

export function login(username, password) {
    return (dispatch) => {
        LoginApi.login(username, password).then(() => {
            dispatch(authenticationSucceeded());
            document.location.replace('/#/app');
        }, (response)=>{
            if(response.status === 401) {
                dispatch(authenticationFailed());
            }
        });
    }
}

export function logout() {
    return (dispatch) => {
        LoginApi.logout().then(() => {
            dispatch(logoutSucceeded());
        }, ()=>{
            dispatch(logoutSucceeded());
        });
    }
}

export function logoutSucceeded() {
    return {type: 'LOGOUT_SUCCESS'};
}

