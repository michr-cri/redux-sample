var Util = function() {
    this.redirect = function(url, openInNewWindow) {
        if (url) {
            if (openInNewWindow) {
                window.open(url);
            } else {
                window.location.href = url;
            }
        } else {
            throw new Error("No url specified for redirect");
        }
    };

    /**
     * formats a message by replacing {\n} placeholders with array values, in order.
     * @param message - the message to be formatted
     * @param values - the array of values to be injected into message
     * @returns {modified message}
     */
    this.format = function(message,values) {
        if (message) {
            if (values && values.length > 0) {
                for (var index in values) {
                    var value = values[index];
                    message = message.split('{'+index+'}').join(value);
                }
            }
        } else {
            throw new Error("Please specify message to be formatted");
        }

        return message;
    };

    /**
     * formats a number by adding commas. e.g. 10000 -> 10,000
     * @param number - the unformatted number without commas
     * @returns {formatted number with commas}
     */
    this.numberWithCommas = function(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    /**
     * returns a random integer between min (included) and max (excluded)
     * @param min - the minimum range (included)
     * @param max - the maximum range (excluded)
     * @returns {random number in range [min, max)}
     */
    this.randomInt = function(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };

    this.formatDate = function(date) {
        if (date !== null) {
            var monthIndex = date.getUTCMonth();
            var monthNames = [
                "January", "February", "March",
                "April", "May", "June", "July",
                "August", "September", "October",
                "November", "December"
            ];
            var month = monthNames[monthIndex];
            var day = date.getUTCDate();
            var year = date.getUTCFullYear();
            return month +  ' ' + day+ ', ' + year;
        } else {
            return null;
        }
    };

    this.setGlobalVar = function(variableName,value){
        window.UMCS = window.UMCS?window.UMCS:{};
        window.UMCS[variableName] = value;
    };

    this.getGlobalVar = function(variableName){
        return window.UMCS[variableName];
    };

    this.getLoggedInUserId = function() {
        var loggedInUser = this.getGlobalVar('authDetails').loggedInUser;
        if (loggedInUser) {
            return loggedInUser.userId;
        }
    };

    this.getLoggedInUserRoles = function() {
        var loggedInUser = this.getGlobalVar('authDetails').loggedInUser;
        if (loggedInUser) {
            return loggedInUser.roles;
        }
    };

    /*
     * @description Extracts a query string parameter/variable's value from an url encoded query string.
     * @see Courtesy of http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript#answer-2480180
     * @function getUrlParam
     * @param {string} param - The name of the query string parameter to extract.
     * @url {string} url - The Url from which query string parameter will be extracted
     * @returns {string} - The query string parameter value. (url decoded)
     */
    this.getUrlParam = function(param, url) {
        if (!url) {
            url = window.location.href;
        }
        var results = new RegExp('[\\?&]' + param + '=([^&#]*)').exec(url);
        if (!results) {
            return undefined;
        }
        return decodeURIComponent(results[1]) || undefined;
    };

    /**
     * util.setUrlParam(page, 2, 'https://umcs.org/index.html#study-results?gender=100&page=1')
     * returns gender=100&page=2
     *
     * util.setUrlParam(page-size, 2, 'https://umcs.org/index.html#study-results?gender=100')
     * returns gender=100&page-size=2
     */
    this.setUrlParam = function(param, paramVal, url){
        if (!url) {
            url = window.location.href;
        }
        var newAdditionalURL = '';
        var tempArray = url.split('?');
        var additionalURL = tempArray[1];
        var temp = '';
        if (additionalURL) {
            tempArray = additionalURL.split('&');
            for (var i=0; i<tempArray.length; i++){
                if(tempArray[i].split('=')[0] !== param){
                    newAdditionalURL += temp + tempArray[i];
                    temp = '&';
                }
            }
        }

        var rows_txt = temp + '' + param + '=' + paramVal;
        return newAdditionalURL + rows_txt;
    };

    this.removeParamFromQuery = function(parameter, query) {

        var prefix= encodeURIComponent(parameter)+'=';
        var pars= query.split(/[&;]/g);

        //reverse iteration as may be destructive
        for (var i= pars.length; i-- > 0;) {
            if (pars[i].lastIndexOf(prefix, 0) !== -1) {
                pars.splice(i, 1);
            }
        }

        return (pars.length > 0 ? pars.join('&') : '');

    };

    this.aggregateArrayValues = function(array) {
        var aggregatedArray = [];
        $.each(array, function(index, element) {
            var existingAnswer = _.findWhere(aggregatedArray, {name: element.name});
            if (existingAnswer) {
                if (existingAnswer.value.constructor === Array) {
                    existingAnswer.value.push(element.value);
                } else {
                    existingAnswer.value = [existingAnswer.value, element.value];
                }
            } else {
                aggregatedArray.push(element);
            }
        });
        return aggregatedArray;
    };

    this.isAndroid = function(){
        return (navigator.userAgent.toLowerCase().indexOf('android') > -1);
    };
};

var util = new Util();
module.exports = util;
