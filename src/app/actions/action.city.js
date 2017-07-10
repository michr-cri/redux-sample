import CityApi from '../apis/CityApi';

export function fetchCitiesSuccess(paginatedResult) {
    return {type: 'FETCH_FORM_CITIES_SUCCESS', payload: paginatedResult};
}

export function fetchCities(page, pageSize) {
    return (dispatch) => {
        CityApi.fetchCities(page, pageSize).then(response => {
            dispatch(fetchCitiesSuccess(response));
        });
    }
}

