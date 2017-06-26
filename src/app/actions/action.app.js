import FormApi from '../apis/FormApi';

export function fetchFormSeedDataSuccess(seedData) {
    return {type: 'FETCH_FORM_SEED_DATA_SUCCESS', payload: seedData};
}

export function fetchFormSeedData() {
    return (dispatch) => {
        FormApi.fetchSeedData().then(response => {
            dispatch(fetchFormSeedDataSuccess(response));
        });
    }
}

export function fetchFormInitialDataSuccess(initialData) {
    return {type: 'FETCH_FORM_INITIAL_DATA_SUCCESS', payload: initialData};
}

export function fetchFormInitialData() {
    return (dispatch) => {
        FormApi.fetchInitialData().then(response => {
            dispatch(fetchFormInitialDataSuccess(response));
        });
    }
}

export function formDataLoaded() {
    return {type: 'FORM_DATA_LOADED'};
}
//
// export function fetchFormData() {
//     return (dispatch) => {
//         Promise.all([
//             dispatch(fetchFormSeedData()),
//             dispatch(fetchFormInitialData())
//         ]).then(() => {
//             dispatch(formDataLoaded());
//         });
//     }
// }