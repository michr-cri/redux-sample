import 'jquery';

class FormApi {
    static fetchSeedData() {
        return jQuery.ajax({
            method: 'GET',
            url: APP_URL + '/states-seed',
            header: {
                'Content-Type': 'application/json'
            }
        });
    }
    static fetchInitialData() {
        return jQuery.ajax({
            method: 'GET',
            url: APP_URL + '/states',
            header: {
                'Content-Type': 'application/json'
            }
        });
    }

    static saveFormData(selectedItem) {
        return jQuery.ajax({
            method: 'POST',
            url: APP_URL + '/states',
            data: selectedItem,
            header: {
                'Content-Type': 'application/json'
            }
        });
    }
}

export default FormApi;