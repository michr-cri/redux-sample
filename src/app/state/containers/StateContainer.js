import { connect } from 'react-redux';
import {withRouter} from 'react-router';
import State from '../components/State';
import {saveFormData} from '../actions/action.state';

function mapStateToProps(state) {
    return {
        formDataLoaded: state.state.formDataLoaded,
        selectedItems: state.state.selectedItems,
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(State));