import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import ReactTestUtils from 'react-dom/test-utils';
import {findDOMNode} from 'react-dom';
import { Provider } from 'react-redux';

import App from '../../src/app/components/App';
import AppContainer from '../../src/app/container/AppContainer';
import reducer from '../../src/app/reducers/reducer';
import {createStore} from 'redux';
import {Router} from 'react-router-dom';
import history from '../../src/app/shared/history';
import FormApi from '../../src/app/apis/FormApi';

import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;

let app;

describe('components', () => {
    describe('App', () => {
        beforeEach(()=> {
            let source = [{text: 'Michigan', value: 'MI'}, {text: 'New York', value: 'NY'}];
            let initialResults = [{text: 'Michigan', value: 'MI'}];
            let fetchSeedDataPromise = new Promise(function(resolve) {resolve(source);});
            let fetchInitialDataPromise = new Promise(function(resolve) {resolve(initialResults);});

            jest.spyOn(FormApi, 'fetchSeedData').mockReturnValueOnce(fetchSeedDataPromise);
            jest.spyOn(FormApi, 'fetchInitialData').mockReturnValueOnce(fetchInitialDataPromise);
            let store = createStore(reducer);
            app = ReactTestUtils.renderIntoDocument(
                <Provider store={store}>
                    <Router history={history} >
                        <AppContainer />
                    </Router>
                </Provider>
            );
        });

        it('should render self', () => {
            const props = {
                selectedItems: ['item1', 'item2'],
                addSeletedItems: jest.fn()
            };
            const renderer = new ReactShallowRenderer();
            const component = renderer.render(<App {...props} />);

            expect(component).toMatchSnapshot();
        });

        it('should add one item when add button is clicked', () => {
            app.forceUpdate();

            const appDOM = findDOMNode(app);

            let eventsLength = appDOM.querySelectorAll('.event-list>li').length;

            let addInput = appDOM.querySelector('#exampleInput');
            $(addInput).selectItem('New York');

            let addButton = appDOM.querySelector('button');
            ReactTestUtils.Simulate.click(addButton);

            expect(appDOM.querySelectorAll('.event-list>li').length).toEqual(eventsLength + 1);

            expect(appDOM.querySelectorAll('.event-list>li')[0].innerHTML).toContain('MI');
            expect(appDOM.querySelectorAll('.event-list>li')[1].innerHTML).toContain('NY');
        });
    })
});

