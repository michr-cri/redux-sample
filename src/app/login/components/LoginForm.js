import React from 'react';
import { Field, reduxForm } from 'redux-form'

class LoginForm extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <div>
                    <label id="labelUsername" htmlFor="textUsername">Unique Name</label>
                    <Field id="textUsername" type="text" name="username" component="input"/>
                </div>

                <div className="field-container">
                    <label id="labelPassword" htmlFor="passwordPassword">Your level-2 password</label>
                    <Field id="passwordPassword" type="password" name="password" component="input"/>
                </div>
                <button id="submitLogin" type="submit" value="SIGN IN" disabled={this.props.pristine || this.props.submitting}>Log in</button>
            </form>
        )
    }
}

export default reduxForm({
    form: 'login'
})(LoginForm);
