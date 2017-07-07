var setupAjax = function (appName) {
    //var util = require('./util.js');
    //var authHelper = require('./auth.helper.js');
    $.ajaxSetup({
        xhrFields: {
            withCredentials: true
        },
        headers: {
            'X-Requested-With': 'XMLHttpRequest'
        },
        cache: false
    });

    $(document).ajaxError(
        function (event, jqxhr, settings, thrownError) {
            var error = jqxhr.getResponseHeader('UMCS-auth-error');

            switch (jqxhr.status) {
                case 401:
                    //  var umcsAccessibleBy = jqxhr.getResponseHeader('UMCS-accessible-by');
                    if (error === 'not-authenticated') {
                        //authHelper.notAuthenticatedHandler(appName);
                    }
                    break;
                case 403:
                    if (error === 'not-authorized') {
                        //authHelper.notAuthorizedHandler();
                    }
                    break;
                case 404:
                    //util.redirect('FRONT_END_BASE_URL/index.html#404-page-not-found');
                    break;
                case 500:
                    if(jqxhr.exceptionThrower === 'login') {
                        return;
                    }
                    if (jqxhr.getResponseHeader('UMCS-server-error')) {
                        var errorId = jqxhr.getResponseHeader('UMCS-server-error');
                        localStorage.setItem('errorId', errorId);
                    }
                    //util.redirect('FRONT_END_BASE_URL/500/index.html');
                    break;
                case 503:
                    //util.redirect('FRONT_END_BASE_URL/503.html');
                    break;
                default:
                    break;
            }
        }
    );

    $(document).ready(function () {
        $(document)
            .ajaxStart(
                function () {
                    $('#divWait').removeClass('hide');
                })
            .ajaxStop(
                function () {
                    $('#divWait').addClass('hide');
                });
    });
};
module.exports = setupAjax;
