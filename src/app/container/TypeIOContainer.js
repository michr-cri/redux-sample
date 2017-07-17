import { connect } from 'react-redux';
import TypeIO from '../components/TypeIO';

function mapStateToProps(state) {
    return {
        initialResults: state.typeio.initialResults,
        source: state.typeio.source
    }
}

function mapDispatchToProps(dispatch) {
    return {
        initializeResults: (initialResults) => {

            let initialValues = [];
            for(let i=0;i<initialResults.length;i++) {
                initialValues.push(initialResults[i].value);
                // dispatch({type: 'SELECT_ITEM', payload: initialResults[i].value});
            }
            dispatch({type: 'ADD_SELECTED_ITEMS', payload: initialValues});
        },
        selectItem: (selectedItem) => {
            dispatch({type: 'SELECT_ITEM', payload: selectedItem});
        },
        removeItem: (removedItem) => {
            dispatch({type: 'REMOVE_ITEM', payload: removedItem});
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(TypeIO);