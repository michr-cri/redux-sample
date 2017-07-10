import '../assets/styles/styles.scss';
import React from 'react';
import { render } from 'react-dom';
import App from './container/AppContainer';
import Login from './container/LoginContainer';
import { Provider } from 'react-redux';
import setupAjax from './ajax.setup';
import { HashRouter, Route, Switch } from 'react-router-dom';
import store from './store';
setupAjax();

render(
    <Provider store={store}>
        <HashRouter >
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route path="/?error=:errorId" component={Login}/>
                <Route path="/app" component={App}/>
            </Switch>
        </HashRouter>
    </Provider>,
    document.getElementById('mainContent')
);


