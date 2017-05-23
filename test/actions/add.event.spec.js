import {addEvent} from '../../src/app/actions/add.event';

describe('actions', () => {
    it('should create an event to add', () => {
        const event = 'Event';
        const expectedAction = {
            type: 'ADD_EVENT',
            payload: event
        };
        expect(addEvent(event)).toEqual(expectedAction)
    })
});