import loginReducer from '../../src/app/reducers/reducer.login';

describe('Login Reducer', ()=> {
    it('initial state', ()=>{
        const newState = loginReducer(undefined, {});
        const expectedNewState = {
            authenticationSucceeded: false
        };

        expect(newState).toEqual(expectedNewState);
    });

    it('AUTHENTICATION_SUCCESS state', ()=> {
        const newState = loginReducer(undefined, {type: 'AUTHENTICATION_SUCCESS'});
        const expectedNewState = {authenticationSucceeded: true};

        expect(newState).toEqual(expectedNewState);
    });

    it('LOGOUT_SUCCESS state', ()=> {
        const newState = loginReducer(undefined, {type: 'LOGOUT_SUCCESS'});
        const expectedNewState = {authenticationSucceeded: false};

        expect(newState).toEqual(expectedNewState);
    });
});