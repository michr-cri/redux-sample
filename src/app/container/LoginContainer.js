import { connect } from 'react-redux';
import {withRouter} from 'react-router';
import {login, logout, authenticationFailed} from '../actions/action.login';
import Login from '../components/Login';

function mapStateToProps(state) {
    return {
        authenticationSucceeded: state.login.authenticationSucceeded
    }
}

function mapDispatchToProps(dispatch) {
    return {
        login: (username, password, redirectUrl) => {
            dispatch(login(username, password, redirectUrl));
        },
        logout: () => {
            dispatch(logout());
        },
        showFeedback: (title, message) => {
            dispatch(authenticationFailed(title, message));
        }
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));