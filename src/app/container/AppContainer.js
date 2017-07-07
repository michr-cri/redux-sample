import { connect } from 'react-redux';
import {withRouter} from 'react-router';
import App from '../components/App';
import {saveFormData} from '../actions/action.app';

function mapStateToProps(state) {
    return {
        formDataLoaded: state.app.formDataLoaded,
        selectedItems: state.app.selectedItems,
        newSelectedItems: state.typeio.selectedItems,
        authenticationSucceeded: state.login.authenticationSucceeded
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addSelectedItems: (newSelectedItems) => {
            dispatch({type: 'ADD_SELECTED_ITEMS', payload: newSelectedItems});
        },
        saveSelectedItems: (selectedItems) => {
            dispatch(saveFormData(selectedItems));
        }
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));