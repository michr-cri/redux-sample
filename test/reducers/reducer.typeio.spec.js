import reducer from '../../src/app/reducers/reducer.typeio';

describe('Reducer', ()=> {
    it('initial state', ()=>{
        const newState = reducer(undefined, {});
        const expectedNewState = {selectedItems: [], initialResults: [], source: []};

        expect(newState).toEqual(expectedNewState);
    });

    it('SELECT_ITEM state', ()=> {
        const newState = reducer(undefined, {type: 'SELECT_ITEM', payload: 'new item'});
        const expectedNewState = {initialResults: [], source: [], selectedItems: ['new item']};

        expect(newState).toEqual(expectedNewState);
    });

    it('REMOVE_ITEM state', ()=> {
        const initialState = {selectedItems: ['new item', 'remove item']};
        const newState = reducer(initialState, {type: 'REMOVE_ITEM', payload: 'remove item'});
        const expectedNewState = {selectedItems: ['new item']};

        expect(newState).toEqual(expectedNewState);
    });

    it('REMOVE_ITEM non existent state', ()=> {
        const initialState = {selectedItems: ['new item', 'remove item']};
        const newState = reducer(initialState, {type: 'REMOVE_ITEM', payload: 'non existent'});
        const expectedNewState = {selectedItems: ['new item','remove item']};

        expect(newState).toEqual(expectedNewState);
    });

    it('FETCH_FORM_INITIAL_DATA_SUCCESS state', ()=> {
        const initialState = {selectedItems: []};
        const initialData = [{data: 'data'}];
        const newState = reducer(initialState, {type: 'FETCH_FORM_INITIAL_DATA_SUCCESS', payload: initialData});
        const expectedNewState = {selectedItems: [], initialResults: initialData};

        expect(newState).toEqual(expectedNewState);
    });

    it('FETCH_FORM_SEED_DATA_SUCCESS state', ()=> {
        const initialState = {selectedItems: []};
        const seedData = [{data: 'data'}];
        const newState = reducer(initialState, {type: 'FETCH_FORM_SEED_DATA_SUCCESS', payload: seedData});
        const expectedNewState = {selectedItems: [], source: seedData};

        expect(newState).toEqual(expectedNewState);
    });
});