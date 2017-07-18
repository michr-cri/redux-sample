import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import ReactTestUtils from 'react-dom/test-utils';
import {findDOMNode} from 'react-dom';
import { Provider } from 'react-redux';

import State from '../../../src/app/state/components/State';
import StateContainer from '../../../src/app/state/containers/StateContainer';
import reducer from '../../../src/app/reducer';
import {createStore} from 'redux';
import {Router} from 'react-router-dom';
import history from '../../../src/app/history';
import StateApi from '../../../src/app/state/apis/StateApi';

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

            jest.spyOn(StateApi, 'fetchSeedData').mockReturnValue(fetchSeedDataPromise);
            jest.spyOn(StateApi, 'fetchInitialData').mockReturnValue(fetchInitialDataPromise);
            let store = createStore(reducer);
            app = ReactTestUtils.renderIntoDocument(
                <Provider store={store}>
                    <Router history={history} >
                        <StateContainer />
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
            const component = renderer.render(<State {...props} />);

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

