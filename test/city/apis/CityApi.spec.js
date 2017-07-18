import CityApi from '../../../src/app/city/apis/CityApi';
import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;

describe('City APIs', () => {
    it('fetch cities - with page and page size', () => {
        let page = 1;
        let pageSize = 2;
        spyOn($, 'ajax');

        CityApi.fetchCities(page, pageSize);

        expect($.ajax.calls.mostRecent().args[0]['url']).toEqual('app_url/cities?page=1&page-size=2');
        expect($.ajax.calls.mostRecent().args[0]['method']).toEqual('GET');
    });

    it('fetch cities - without page and page size', () => {
        spyOn($, 'ajax');

        CityApi.fetchCities();

        expect($.ajax.calls.mostRecent().args[0]['url']).toEqual('app_url/cities');
        expect($.ajax.calls.mostRecent().args[0]['method']).toEqual('GET');
    });
});