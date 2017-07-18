import '../assets/styles/styles.scss';
import React from 'react';
import { render } from 'react-dom';
import State from './state/containers/StateContainer';
import Login from './login/containers/LoginContainer';
import City from './city/containers/CityContainer';
import { Provider } from 'react-redux';
import setupAjax from './ajax.setup';
import {Router, Route, Switch } from 'react-router-dom';
import store from './store';
import history from './history';
setupAjax();

render(
    <Provider store={store}>
        <Router history={history} >
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route path="/state" component={State}/>
                <Route path="/cities" component={City}/>
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('mainContent')
);


