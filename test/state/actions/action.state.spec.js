import * as stateActions from '../../../src/app/state/actions/action.state';
import StateApi from '../../../src/app/state/apis/StateApi';

describe('app actions', () => {
    it('fetch form seed data success', () => {
        const seedData = {};
        const expectedAction = {
            type: 'FETCH_FORM_SEED_DATA_SUCCESS',
            payload: seedData
        };
        expect(stateActions.fetchFormSeedDataSuccess(seedData)).toEqual(expectedAction);
    });

    it('fetch form seed data', () => {
        const promise = new Promise(function(resolve, reject) {resolve();});
        const dispatch = jest.fn();
        const action = stateActions.fetchFormSeedData();

        jest.spyOn(StateApi, 'fetchSeedData').mockReturnValue(promise);
        action(dispatch);

        return promise.then(response => {
            expect(dispatch.mock.calls[0][0]).toEqual(
                {
                    type: 'FETCH_FORM_SEED_DATA_SUCCESS',
                    payload: response
                }
            );
        });
    });

    it('fetch form initial data success', () => {
        const initialData = {};
        const expectedAction = {
            type: 'FETCH_FORM_INITIAL_DATA_SUCCESS',
            payload: initialData
        };
        expect(stateActions.fetchFormInitialDataSuccess(initialData)).toEqual(expectedAction);
    });

    it('fetch form initial data', () => {
        const promise = new Promise(function(resolve, reject) {resolve();});
        const dispatch = jest.fn();
        const action = stateActions.fetchFormInitialData();

        jest.spyOn(StateApi, 'fetchInitialData').mockReturnValue(promise);
        action(dispatch);

        return promise.then(response => {
            expect(dispatch.mock.calls[0][0]).toEqual(
                {
                    type: 'FETCH_FORM_INITIAL_DATA_SUCCESS',
                    payload: response
                }
            );
        });
    });

    it('form data loaded', () => {
        const expectedAction = {
            type: 'FORM_DATA_LOADED'
        };
        expect(stateActions.formDataLoaded()).toEqual(expectedAction);
    });

    it('save form data success', ()=> {
        const expectedAction = {
            type: 'FORM_DATA_SAVED'
        };
        expect(stateActions.saveFormDataSuccess()).toEqual(expectedAction);
    });

    it('save form data', () => {
        const promise = new Promise(function(resolve, reject) {resolve();});
        const dispatch = jest.fn();
        const action = stateActions.saveFormData();

        jest.spyOn(StateApi, 'saveFormData').mockReturnValue(promise);
        action(dispatch);

        return promise.then(() => {
            expect(dispatch.mock.calls[0][0]).toEqual(
                {
                    type: 'FORM_DATA_SAVED'
                }
            );
        });
    });
});