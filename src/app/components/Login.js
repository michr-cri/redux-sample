import React from 'react';
import util from '../shared/util';
import FeedbackContainer from '../container/FeedbackContainer';

class Login extends React.Component {

    componentWillMount() {
        //window.history.pushState({}, 'Login', '/');
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
                <form id="frmLogin" onSubmit={this.handleLogin.bind(this)}>
                    <div>
                        <label id="labelUsername" htmlFor="textUsername">Unique Name</label>
                        <input id="textUsername" type="text" name="username" required ref={el => this.textUsername = el}/>
                    </div>

                    <div>
                        <label id="labelPassword" htmlFor="passwordPassword">Your level-2 password</label>
                        <input id="passwordPassword" type="password" name="password" required ref={el => this.passwordPassword = el}/>
                    </div>
                    <button id="submitLogin" type="submit" value="SIGN IN">Log in</button>
                </form>
            </div>
        );
    }
}

export default Login;
