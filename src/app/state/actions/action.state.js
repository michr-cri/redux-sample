import StateApi from '../apis/StateApi';

export function fetchFormSeedDataSuccess(seedData) {
    return {type: 'FETCH_FORM_SEED_DATA_SUCCESS', payload: seedData};
}

export function fetchFormSeedData() {
    return (dispatch) => {
        StateApi.fetchSeedData().then(response => {
            dispatch(fetchFormSeedDataSuccess(response));
        });
    }
}

export function fetchFormInitialDataSuccess(initialData) {
    return {type: 'FETCH_FORM_INITIAL_DATA_SUCCESS', payload: initialData};
}

export function fetchFormInitialData() {
    return (dispatch) => {
        StateApi.fetchInitialData().then(response => {
            dispatch(fetchFormInitialDataSuccess(response));
        });
    }
}

export function formDataLoaded() {
    return {type: 'FORM_DATA_LOADED'};
}

export function saveFormDataSuccess() {
    return {type: 'FORM_DATA_SAVED'};
}

export function saveFormData(selectItems) {
    return (dispatch) => {
        StateApi.saveFormData(selectItems).then(() => {
            dispatch(saveFormDataSuccess());
        });
    };
}

