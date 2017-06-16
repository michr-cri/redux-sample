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
        events: ['event1', 'event2'],
        addEvent: jest.fn()
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
            const appDOM = findDOMNode(app);
            let eventsLength = appDOM.querySelectorAll('.event-list>li').length;
            let addInput = appDOM.querySelector('input');
            addInput.value = 'Event four';
            let addButton = appDOM.querySelector('button');
            ReactTestUtils.Simulate.click(addButton);
            expect(appDOM.querySelectorAll('.event-list>li').length).toEqual(eventsLength + 1);
        });
    })
});

