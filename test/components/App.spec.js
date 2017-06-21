import React from 'react';
import renderer from 'react-test-renderer';
import ReactTestUtils from 'react-dom/test-utils';
import {findDOMNode} from 'react-dom';
import { Provider } from 'react-redux';

import App from '../../src/app/components/App';
import AppContainer from '../../src/app/container/AppContainer';
import store from '../../src/app/store';
require('typeio');
import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;

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
        beforeEach(()=>{
            store.dispatch({type: 'RESET'});
        });
        it('should render self', () => {
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

            console.log(appDOM.querySelector('#divResults').innerHTML);

            expect(appDOM.querySelectorAll('.event-list>li').length).toEqual(eventsLength + 2);

            expect(appDOM.querySelectorAll('.event-list>li')[0].innerHTML).toContain('MI');
            expect(appDOM.querySelectorAll('.event-list>li')[1].innerHTML).toContain('MI');
            expect(appDOM.querySelectorAll('.event-list>li')[2].innerHTML).toContain('NY');
        });
    })
});

