import { connect } from 'react-redux';
import App from '../components/App';

function mapStateToProps(state) {
    return {
        events: state.get('events')
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addEvent: (newEvent) => {
            dispatch({type: 'ADD_EVENT', payload: newEvent});
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);