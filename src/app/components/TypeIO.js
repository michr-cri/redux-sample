import React from 'react';
import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;
require('typeio');
class TypeIO extends React.Component {
    componentDidMount() {
        this.$el = $(this.el);

        this.$el.typeIO(
            {
                hint: true,
                highlight: true,
                minLength: 0,
                name: 'states',
                resultsContainer:'#divResults',
            },
            {
                display:'text',
                source: [{text:'Michigan', value:'MI'}, {text:'New York', value:'NY'}],
                templates: {
                    suggestion: function(data) {
                        return '<div>' + data.text + '</div>';
                    }
                }
            }
        );
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className="typeahead-container">
                <div id="divResults"></div>
                <input type="text" id="exampleInput" ref={el => this.el = el}/>
            </div>
        );
    }
}

export default TypeIO;