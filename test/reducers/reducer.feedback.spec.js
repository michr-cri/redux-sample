import feedbackReducer from '../../src/app/reducers/reducer.feedback';

describe('Feedback Reducer', ()=> {
    it('initial state', ()=>{
        const newState = feedbackReducer(undefined, {});
        const expectedNewState = {};

        expect(newState).toEqual(expectedNewState);
    });

    it('SHOW_ERROR_MESSAGE state', ()=> {
        const newState = feedbackReducer(undefined, {type: 'SHOW_ERROR_MESSAGE', payload: {title: 'title', message: 'message'}});
        const expectedNewState = {title: 'title', message: 'message'};

        expect(newState).toEqual(expectedNewState);
    });
});