import LoginApi from '../../../src/app/login/apis/LoginApi';
import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;

describe('Form APIs', () => {
    it('login', () => {
        let username = 'username';
        let password = 'password';
        spyOn($, 'ajax');

        LoginApi.login(username, password);

        expect($.ajax.calls.mostRecent().args[0]['url']).toEqual('app_url/login');
        expect($.ajax.calls.mostRecent().args[0]['method']).toEqual('POST');
        expect($.ajax.calls.mostRecent().args[0]['data']).toEqual('username=' + username + '&password=' + password);
    });

    it('logout', () => {
        spyOn($, 'ajax');

        LoginApi.logout();
        
        expect($.ajax.calls.mostRecent().args[0]['url']).toEqual('app_url/logout');
        expect($.ajax.calls.mostRecent().args[0]['method']).toEqual('GET');
    });
});