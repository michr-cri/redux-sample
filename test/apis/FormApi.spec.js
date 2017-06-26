import FormApi from '../../src/app/apis/FormApi';
import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;

describe('Form APIs', () => {
    it('fetch form seed data', () => {
        spyOn($, 'ajax');

        FormApi.fetchSeedData();

        expect($.ajax.calls.mostRecent().args[0]['url']).toEqual('/states-seed');
        expect($.ajax.calls.mostRecent().args[0]['method']).toEqual('GET');
    });

    it('fetch form initial data', () => {
        spyOn($, 'ajax');

        FormApi.fetchInitialData();
        
        expect($.ajax.calls.mostRecent().args[0]['url']).toEqual('/states');
        expect($.ajax.calls.mostRecent().args[0]['method']).toEqual('GET');
    });
});