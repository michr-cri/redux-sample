import React from 'react';
import renderer from 'react-test-renderer';
import ReactTestUtils from 'react-dom/test-utils';
import {findDOMNode} from 'react-dom';
import { Provider } from 'react-redux';

import App from '../../src/app/components/App';
import AppContainer from '../../src/app/container/AppContainer';
import reducer from '../../src/app/reducers/reducer';
import {createStore} from 'redux';

import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;

const typeioIntialState = {
    typeio: {
        initialResults: [{text: 'Michigan', value: 'MI'}],
        source: [{text: 'Michigan', value: 'MI'}, {text: 'New York', value: 'NY'}],
        selectedItems: []
    },
    app: {
        formDataLoaded: false,
        selectedItems: []
    }
};

const store = createStore(reducer,typeioIntialState);
function setup() {
    const props = {
        selectedItems: ['item1', 'item2'],
        addSeletedItems: jest.fn()
    };

    const component = renderer.create(<App {...props} />);

    return {
        props,
        component
    };

}

describe('components', () => {
    fdescribe('App', () => {
        xit('should render self', () => {
            const { component } = setup();

            let tree = component.toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('should add one item when add button is clicked', () => {
            let app = ReactTestUtils.renderIntoDocument(
                <Provider store={store}>
                     <AppContainer />
                </Provider>
            );
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

