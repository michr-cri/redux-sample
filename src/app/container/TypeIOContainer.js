import { connect } from 'react-redux';
import TypeIO from '../components/TypeIO';

function mapStateToProps(state) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return {
        selectItem: (selectedItem) => {
            dispatch({type: 'SELECT_ITEM', payload: selectedItem});
        }
    };
}

export default connect(null, mapDispatchToProps)(TypeIO);