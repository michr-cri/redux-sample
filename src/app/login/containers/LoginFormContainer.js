import { connect } from 'react-redux';
import {login, logout} from '../actions/action.login';
import LoginForm from '../components/LoginForm';

function mapDispatchToProps(dispatch) {
    return {
        onSubmit: (values) => {
            dispatch(login(values.username, values.password));
        },
        logout: () => {
            dispatch(logout());
        }
    };
}

export default connect(null, mapDispatchToProps)(LoginForm);