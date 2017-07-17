import React from 'react';
import TypeIOContainer from '../container/TypeIOContainer';
import FormApi from '../apis/FormApi';

class App extends React.Component {

    componentDidMount() {
        this.$el = $(this.el);

        let typeioComponent = this.typeio.getWrappedInstance();
        FormApi.fetchSeedData().then(source => {
            FormApi.fetchInitialData().then(initialResults => {
                this.$el.find('#exampleInput').typeIO(
                    {
                        hint: true,
                        highlight: true,
                        minLength: 0,
                        name: 'states',
                        resultsContainer:'#divResults',
                        selectedTermRemovedCallback: typeioComponent.handleSelectedTermRemoved.bind(typeioComponent),
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
                ).on('typeahead:selected', typeioComponent.handleSelected.bind(typeioComponent));

                typeioComponent.props.initializeResults(initialResults);
            });
        });
    }

    render() {
        return ( <div ref={el => this.el = el}>
            <ul className='event-list'>
                {this.props.selectedItems.map((selectedItem, index) => <li key={index}>{selectedItem}</li>)}
            </ul>
            <TypeIOContainer ref={el => this.typeio = el} />
            <div>
                <button id='buttonAdd'
                        onClick={()=> {
                            this.props.addSelectedItems.call(this, this.props.newSelectedItems);
                        }}>
                    Add
                </button>
            </div>
            <div>
                <button id='buttonSave'
                        onClick={()=> {
                            this.props.saveSelectedItems.call(this, this.props.selectedItems);
                        }}>
                    Save
                </button>
            </div>
        </div> );
    }
}

export default App;
