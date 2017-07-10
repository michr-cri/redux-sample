import { connect } from 'react-redux';
import Pagination from '../components/Pagination';
import {fetchCities} from '../actions/action.city';

function mapStateToProps(state) {
    return {
        cities: state.city.page,
        totalCount: state.city.totalCount
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchCities: (page, pageSize) => {
            dispatch(fetchCities(page, pageSize));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);