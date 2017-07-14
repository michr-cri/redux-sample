import React from 'react';
import util from '../shared/util';
import 'parsleyjs';
import parsleyConfig from '../parsley.config';

import FeedbackContainer from '../container/FeedbackContainer';

class Login extends React.Component {

    componentWillMount() {

    }

    componentDidMount() {
        let errorId = util.getUrlParam('error');
        if(errorId === '401') {
            this.props.showFeedback('Unauthenticated User', 'You must enter correct username and password first');
        }
        $(this.form).parsley(parsleyConfig).on('form:error', function () {
            $(".field-error-text:not(:empty):first").parent().get(0).scrollIntoView();
        });
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
                <form ref={el => this.form = el} id="frmLogin" onSubmit={this.handleLogin.bind(this)}>
                    <div className="field-container">
                        <label id="labelUsername" htmlFor="textUsername">Unique Name</label>
                        <input id="textUsername" type="text" name="username" data-parsley-required ref={el => this.textUsername = el}/>
                    </div>

                    <div className="field-container">
                        <label id="labelPassword" htmlFor="passwordPassword">Your level-2 password</label>
                        <input id="passwordPassword" type="password" name="password" data-parsley-required ref={el => this.passwordPassword = el}/>
                    </div>
                    <button id="submitLogin" type="submit" value="SIGN IN">Log in</button>
                </form>
            </div>
        );
    }
}

export default Login;
