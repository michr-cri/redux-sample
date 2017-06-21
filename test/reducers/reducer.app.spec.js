import reducer from '../../src/app/reducers/reducer.app';
import {fromJS} from 'immutable';

describe('Reducer', ()=> {
    it('initial state', ()=>{
        const newState = reducer(undefined, {});
        const expectedNewState = fromJS({selectedItems: []});

        expect(newState).toEqual(expectedNewState);
    });

    it('ADD_SELECTED_ITEMS state', ()=> {
        const newState = reducer(undefined, {type: 'ADD_SELECTED_ITEMS', payload: 'new item'});
        const expectedNewState = fromJS({selectedItems: ['new item']});

        expect(newState).toEqual(expectedNewState);
    });
});