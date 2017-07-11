import '../assets/styles/styles.scss';
import React from 'react';
import { render } from 'react-dom';
import App from './container/AppContainer';
import Login from './container/LoginContainer';
import City from './container/CityContainer';
import { Provider } from 'react-redux';
import setupAjax from './ajax.setup';
import { HashRouter, Router, Route, Switch } from 'react-router-dom';
import store from './store';
import history from './shared/history';
setupAjax();

render(
    <Provider store={store}>
        <Router history={history} >
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route path="/app" component={App}/>
                <Route path="/cities" component={City}/>
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('mainContent')
);


