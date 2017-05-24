import '../style/index.scss';
import React from 'react';
import { render } from 'react-dom';
import App from './container/AppContainer';
import { Provider } from 'react-redux';
import store from './store';

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
