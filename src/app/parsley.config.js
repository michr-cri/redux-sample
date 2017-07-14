import 'parsleyjs';

var parsleyConfig = {
    errorsContainer: function (field) {
        var parent = field.$element.parent();

        while(parent) {
            if(parent.attr('class') && parent.attr('class').indexOf('field-container') !== -1) {
                break;
            }
            parent = parent.parent();
        }

        return parent;

    },
    errorsWrapper: '<div class="field-error-text"></div>',
    errorTemplate: '<span></span>'
};


module.exports = parsleyConfig;




