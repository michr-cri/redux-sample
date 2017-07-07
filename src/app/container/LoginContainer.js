import { connect } from 'react-redux';
import {withRouter} from 'react-router';
import {login, logout} from '../actions/action.login';
import Login from '../components/Login';

function mapStateToProps(state) {
    return {
        authenticationSucceeded: state.login.authenticationSucceeded
    }
}

function mapDispatchToProps(dispatch) {
    return {
        login: (username, password) => {
            dispatch(login(username, password));
        },
        logout: () => {
            dispatch(logout());
        }
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));