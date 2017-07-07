import React from 'react';
import Feedback from '../container/FeedbackContainer';
import {Redirect} from 'react-router-dom';

class Login extends React.Component {

    componentWillMount() {
        window.history.pushState({}, 'Login', '/');
        this.props.logout();
    }

    handleLogin(event) {
        event.preventDefault();
        event.stopPropagation();

        let username = this.textUsername.value;
        let password = this.passwordPassword.value;

        this.props.login(username, password);
    }

    render() {

        return (
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
        );
    }
}

export default Login;
