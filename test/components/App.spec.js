import React from 'react';
import { mount } from 'enzyme';
import App from '../../src/app/components/App';

function setup() {
    const props = {
        events: ['event1', 'event2'],
        addEvent: jest.fn()
    };

    const enzymeWrapper = mount(<App {...props} />);

    return {
        props,
        enzymeWrapper
    };
}

describe('components', () => {
    describe('App', () => {
        it('should render self', () => {
            const { enzymeWrapper } = setup();


            expect(enzymeWrapper.find('ul').hasClass('event-list')).toBe(true);
            expect(enzymeWrapper.find('li').length).toBe(2);
            enzymeWrapper.find('li').forEach(function (node, index) {
                expect(node.text()).toEqual('event' + (index+1));
            });

            expect(enzymeWrapper.find('input').props().type).toBe('text');
            expect(enzymeWrapper.find('input').props().id).toBe('inputTextNewEvent');
            expect(enzymeWrapper.find('button').props().id).toBe('buttonAddEvent');
            expect(enzymeWrapper.find('button').text()).toBe('Add');
        });

        it('should call addEvent if button is clicked', () => {
            const { enzymeWrapper, props } = setup();

            const button = enzymeWrapper.find('button');
            button.props().onClick();

            expect(props.addEvent.mock.calls.length).toBe(1);
        });
    })
});

