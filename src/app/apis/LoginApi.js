import 'jquery';

class LoginApi {
    static login(username, password) {
        return jQuery.ajax({
            method: 'POST',
            url: APP_URL + '/login',
            data: 'username=' + username + '&password=' + password,
            header: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
    }

    static logout() {
        return jQuery.ajax({
            method: 'GET',
            url: APP_URL + '/logout'
        });
    }
}

export default LoginApi;