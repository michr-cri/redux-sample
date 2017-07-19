import React from 'react';
import util from '../../util';
import LoginFormContainer from '../containers/LoginFormContainer';
import FeedbackContainer from '../../shared/containers/FeedbackContainer';

class Login extends React.Component {

    componentWillMount() {

    }

    componentDidMount() {
        let errorId = util.getUrlParam('error');
        if(errorId === '401') {
            this.props.showFeedback('Unauthenticated User', 'You must enter correct username and password first');
        }
    }

    handleLogin(event) {
        event.preventDefault();
        event.stopPropagation();

        let username = this.textUsername.value;
        let password = this.passwordPassword.value;
        let redirectUrl = util.getUrlParam('redirect-url');

        this.props.login(username, password, redirectUrl);
    }

    render() {

        return (
            <div>
                <FeedbackContainer />
                <LoginFormContainer />
            </div>
        );
    }
}

export default Login;
