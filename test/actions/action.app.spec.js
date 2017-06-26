import * as appActions from '../../src/app/actions/action.app';
import FormApi from '../../src/app/apis/FormApi';

describe('app actions', () => {
    it('fetch form seed data success', () => {
        const seedData = {};
        const expectedAction = {
            type: 'FETCH_FORM_SEED_DATA_SUCCESS',
            payload: seedData
        };
        expect(appActions.fetchFormSeedDataSuccess(seedData)).toEqual(expectedAction);
    });

    it('fetch form seed data', () => {
        const promise = new Promise(function(resolve, reject) {resolve();});
        const dispatch = jest.fn();
        const action = appActions.fetchFormSeedData();

        jest.spyOn(FormApi, 'fetchSeedData').mockReturnValue(promise);
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
        expect(appActions.fetchFormInitialDataSuccess(initialData)).toEqual(expectedAction);
    });

    it('fetch form initial data', () => {
        const promise = new Promise(function(resolve, reject) {resolve();});
        const dispatch = jest.fn();
        const action = appActions.fetchFormInitialData();

        jest.spyOn(FormApi, 'fetchInitialData').mockReturnValue(promise);
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
        expect(appActions.formDataLoaded()).toEqual(expectedAction);
    });
});