import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;

class FormApi {
    static fetchSeedData() {
        return jQuery.ajax({
            method: 'GET',
            url: (typeof APP_URL !== 'undefined')?APP_URL:'' + '/states-seed',
            header: {
                'Content-Type': 'application/json'
            }
        });
    }
    static fetchInitialData() {
        return jQuery.ajax({
            method: 'GET',
            url: (typeof APP_URL !== 'undefined')?APP_URL:'' + '/states',
            header: {
                'Content-Type': 'application/json'
            }
        });
    }
}

export default FormApi;