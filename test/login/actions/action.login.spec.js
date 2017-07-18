import * as loginActions from '../../../src/app/login/actions/action.login';
import LoginApi from '../../../src/app/login/apis/LoginApi';

describe('login actions', () => {
    it('authentication success', () => {
        const expectedAction = {
            type: 'AUTHENTICATION_SUCCESS'
        };
        expect(loginActions.authenticationSucceeded()).toEqual(expectedAction);
    });

    it('show error message', () => {
        const expectedAction = {
            type: 'SHOW_ERROR_MESSAGE',
            payload: {title: 'title', message: 'message'}
        };
        expect(loginActions.authenticationFailed('title', 'message')).toEqual(expectedAction);
    });

    it('login action - success', () => {
        const promise = new Promise(function(resolve, reject) {resolve();});
        const dispatch = jest.fn();
        const action = loginActions.login('username', 'password');

        jest.spyOn(LoginApi, 'login').mockReturnValue(promise);
        action(dispatch);

        return promise.then(response => {
            expect(dispatch.mock.calls[0][0]).toEqual(
                {
                    type: 'AUTHENTICATION_SUCCESS'
                }
            );
        });
    });

    it('login action - fail', () => {
        const promise = new Promise(function(resolve, reject) {reject({status:401});});
        const dispatch = jest.fn();
        const action = loginActions.login('username', 'password');

        jest.spyOn(LoginApi, 'login').mockReturnValue(promise);
        action(dispatch);

        return promise.catch(error => {
            expect(dispatch.mock.calls[0][0]).toEqual(
                {
                    type: 'SHOW_ERROR_MESSAGE',
                    payload: {title: 'Wrong authentication', message: 'You enter the wrong username and password'}
                }
            );
        });
    });

    it('logout action', () => {
        const promise = new Promise(function(resolve, reject) {resolve();});
        const dispatch = jest.fn();
        const action = loginActions.logout();

        jest.spyOn(LoginApi, 'logout').mockReturnValue(promise);
        action(dispatch);

        return promise.catch(() => {
            expect(dispatch.mock.calls[0][0]).toEqual(
                {
                    type: 'LOGOUT_SUCCESS',
                }
            );
        });
    });

    it('logout success', () => {
        const expectedAction = {
            type: 'LOGOUT_SUCCESS',
        };
        expect(loginActions.logoutSucceeded()).toEqual(expectedAction);
    });
});