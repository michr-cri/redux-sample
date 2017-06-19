import React from 'react';
import renderer from 'react-test-renderer';
import ReactTestUtils from 'react-dom/test-utils';
import {findDOMNode} from 'react-dom';
import { Provider } from 'react-redux';

import App from '../../src/app/components/App';
import AppContainer from '../../src/app/container/AppContainer';
import store from '../../src/app/store';

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
    describe('App', () => {
        it('should render self', () => {
            const { component } = setup();

            let tree = component.toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('should call addEvent if button is clicked', () => {
            const app = ReactTestUtils.renderIntoDocument(
                <Provider store={store}>
                     <AppContainer />
                </Provider>
            );
            store.dispatch({type: 'SELECT_ITEM', payload: 'item1'});
            const appDOM = findDOMNode(app);
            let eventsLength = appDOM.querySelectorAll('.event-list>li').length;
            let addButton = appDOM.querySelector('button');

            ReactTestUtils.Simulate.click(addButton);

            expect(appDOM.querySelectorAll('.event-list>li').length).toEqual(eventsLength + 1);

            expect(appDOM.querySelectorAll('.event-list>li')[0].innerHTML).toContain('item1');
        });
    })
});

