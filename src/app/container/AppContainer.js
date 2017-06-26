import { connect } from 'react-redux';
import App from '../components/App';
import {fetchFormData} from '../actions/action.app';

function mapStateToProps(state) {
    return {
        formDataLoaded: state.app.formDataLoaded,
        selectedItems: state.app.selectedItems,
        newSelectedItems: state.typeio.selectedItems
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchFormData: () => {
            dispatch(fetchFormData());
        },
        addSelectedItems: (newSelectedItems) => {
            dispatch({type: 'ADD_SELECTED_ITEMS', payload: newSelectedItems});
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);