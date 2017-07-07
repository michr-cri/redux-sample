import * as loginActions from '../../src/app/actions/action.login';
import LoginApi from '../../src/app/apis/LoginApi';

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
        expect(loginActions.authenticationFailed()).toEqual(expectedAction);
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
                    payload: {title: 'title', message: 'message'}
                }
            );
        });
    });
});