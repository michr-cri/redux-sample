import reducer from '../../src/app/reducers/reducer.typeio';
import {fromJS} from 'immutable';

describe('Reducer', ()=> {
    it('initial state', ()=>{
        const newState = reducer(undefined, {});
        const expectedNewState = fromJS({selectedItems: []});

        expect(newState).toEqual(expectedNewState);
    });

    it('SELECT_ITEM state', ()=> {
        const newState = reducer(undefined, {type: 'SELECT_ITEM', payload: 'new item'});
        const expectedNewState = fromJS({selectedItems: ['new item']});

        expect(newState).toEqual(expectedNewState);
    });

    it('REMOVE_ITEM state', ()=> {
        const initialState = fromJS({selectedItems: ['new item', 'remove item']});
        const newState = reducer(initialState, {type: 'REMOVE_ITEM', payload: 'remove item'});
        const expectedNewState = fromJS({selectedItems: ['new item']});

        expect(newState).toEqual(expectedNewState);
    });
});