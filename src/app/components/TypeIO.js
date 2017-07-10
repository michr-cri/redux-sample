import React from 'react';
import 'jquery';
import 'typeio';
import FormApi from '../apis/FormApi';

class TypeIO extends React.Component {
    componentDidMount() {
        this.$el = $(this.el);

        FormApi.fetchSeedData().then(source => {
            FormApi.fetchInitialData().then(initialResults => {
                this.$el.typeIO(
                    {
                        hint: true,
                        highlight: true,
                        minLength: 0,
                        name: 'states',
                        resultsContainer:'#divResults',
                        selectedTermRemovedCallback: this.handleSelectedTermRemoved.bind(this),
                        initialResults: initialResults
                    },
                    {
                        display:'text',
                        source: source,
                        templates: {
                            suggestion: function(data) {
                                return '<div>' + data.text + '</div>';
                            }
                        }
                    }
                ).on('typeahead:selected', this.handleSelected.bind(this));

                this.props.initializeResults(initialResults);
            });
        }, error => {
            if(error.status === 401 || error.status === 403) {
                document.location.replace('/#?error=' + error.status + '&redirect-url=' + window.location.hash);
            }
        });

    }

    handleSelectedTermRemoved(removedTerm) {
        this.props.removeItem(removedTerm);
    }

    handleSelected(event, datum) {
        this.props.selectItem(datum.value);
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