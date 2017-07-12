import { connect } from 'react-redux';
import City from '../components/City';
import {fetchCities, goToPage} from '../actions/action.city';

function mapStateToProps(state) {
    console.log(state.city.cities);
    return {
        cities: state.city.cities,
        totalCount: state.city.totalCount,
        page: state.city.page,
        pageSize: state.city.pageSize
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchCities: (page, pageSize) => {
            dispatch(fetchCities(page, pageSize));
        },
        goToPage: (page) => {
            dispatch(goToPage(page));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(City);