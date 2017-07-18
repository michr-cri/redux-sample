import StateApi from '../../../src/app/state/apis/StateApi';
import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;

describe('Form APIs', () => {
    it('fetch form seed data', () => {
        spyOn($, 'ajax');

        StateApi.fetchSeedData();

        expect($.ajax.calls.mostRecent().args[0]['url']).toEqual('app_url/states-seed');
        expect($.ajax.calls.mostRecent().args[0]['method']).toEqual('GET');
    });

    it('fetch form initial data', () => {
        spyOn($, 'ajax');

        StateApi.fetchInitialData();
        
        expect($.ajax.calls.mostRecent().args[0]['url']).toEqual('app_url/states');
        expect($.ajax.calls.mostRecent().args[0]['method']).toEqual('GET');
    });

    it('save form data', () => {
        let seletedItem = [];
        spyOn($, 'ajax');

        StateApi.saveFormData(seletedItem);

        expect($.ajax.calls.mostRecent().args[0]['url']).toEqual('app_url/states');
        expect($.ajax.calls.mostRecent().args[0]['method']).toEqual('POST');
        expect($.ajax.calls.mostRecent().args[0]['data']).toEqual(seletedItem);
    });
});