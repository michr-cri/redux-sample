import 'jquery';
//window.$ = window.jQuery = jQuery;

class CityApi {
    static fetchCities(page, pageSize) {
        let url = APP_URL + '/cities';
        if(page && pageSize) {
            url += '?page=' + page + '&page-size=' + pageSize;
        }
        return jQuery.ajax({
            method: 'GET',
            url: url,
            header: {
                'Content-Type': 'application/json'
            }
        });
    }

}

export default CityApi;