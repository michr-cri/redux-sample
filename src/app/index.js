import '../assets/styles/styles.scss';
import React from 'react';
import { render } from 'react-dom';
import App from './container/AppContainer';
import { Provider } from 'react-redux';
import FormApi from './apis/FormApi';
import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers/reducer';
import thunk from 'redux-thunk';

FormApi.fetchSeedData().then(source => {
    FormApi.fetchInitialData().then(initialResults => {
        let typeioIntialState = {
            typeio: {
                initialResults: initialResults,
                source: source,
                selectedItems: []
            },
            app: {
                formDataLoaded: false,
                selectedItems: []
            }
        };
        let store = createStore(reducer,typeioIntialState, applyMiddleware(thunk));
        render(
            <Provider store={store}>
                <App />
            </Provider>,
            document.getElementById('app')
        );
    });
});


