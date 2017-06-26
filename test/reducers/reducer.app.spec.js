import reducer from '../../src/app/reducers/reducer.app';

describe('Reducer', ()=> {
    it('initial state', ()=>{
        const newState = reducer(undefined, {});
        const expectedNewState = {selectedItems: [], formDataLoaded: false};

        expect(newState).toEqual(expectedNewState);
    });

    it('ADD_SELECTED_ITEMS state', ()=> {
        const newState = reducer(undefined, {type: 'ADD_SELECTED_ITEMS', payload: 'new item'});
        const expectedNewState = {formDataLoaded: false, selectedItems: ['new item']};

        expect(newState).toEqual(expectedNewState);
    });

    it('FORM_DATA_LOADED', () => {
        const newState = reducer(undefined, {type: 'FORM_DATA_LOADED'});
        const expectedNewState = {formDataLoaded: true, selectedItems: []};

        expect(newState).toEqual(expectedNewState);
    });
});