import config from '../app.config';
import util from '../shared/util';

const intitalState = {
    totalCount: 0,
    cities: [],
    page: Number(util.getUrlParam('page')?util.getUrlParam('page'):1),
    pageSize: Number(config.app.city.page.size)
};
export default function cityReducer(state = intitalState, action) {
    switch(action.type) {
        case 'FETCH_FORM_CITIES_SUCCESS':
            var newState = Object.assign({}, state);
            newState.totalCount = action.payload.totalCount;
            newState.cities = action.payload.page;
            return newState;
        case 'GO_TO_PAGE':
            var newState = Object.assign({}, state);
            newState.page = action.payload;
            return newState;
        default:
            return state;
    }
}
