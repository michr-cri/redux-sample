import LoginApi from '../apis/LoginApi';

export function authenticationSucceeded() {
    return {type: 'AUTHENTICATION_SUCCESS'};
}

export function authenticationFailed(title, message) {
    return {type: 'SHOW_ERROR_MESSAGE', payload: {title: title, message: message}}
}

export function login(username, password, redirectUrl) {
    return (dispatch) => {
        LoginApi.login(username, password).then(() => {
            dispatch(authenticationSucceeded());
            if(!redirectUrl) {
                redirectUrl = '/#/app';
            }
            document.location.replace(redirectUrl);
        }, (response)=>{
            if(response.status === 401) {
                dispatch(authenticationFailed('Wrong authentication', 'You enter the wrong username and password'));
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

