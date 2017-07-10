import '../assets/styles/styles.scss';
import React from 'react';
import { render } from 'react-dom';
import App from './container/AppContainer';
import Login from './container/LoginContainer';
import Pagination from './container/PaginationContainer';
import { Provider } from 'react-redux';
import setupAjax from './ajax.setup';
import { HashRouter, Route, Switch } from 'react-router-dom';
import store from './store';
setupAjax();

render(
    <Provider store={store}>
        <HashRouter hashType="noslash" >
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route path="/app" component={App}/>
                <Route path="/pagination" component={Pagination}/>
            </Switch>
        </HashRouter>
    </Provider>,
    document.getElementById('mainContent')
);


