import { connect } from 'react-redux';
import App from '../components/App';

function mapStateToProps(state) {
    return {
        selectedItems: state.app.get('selectedItems'),
        newSelectedItems: state.typeio.get('selectedItems')
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addSelectedItems: (newSelectedItems) => {
            dispatch({type: 'ADD_SELECTED_ITEMS', payload: newSelectedItems});
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);