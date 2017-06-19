import React from 'react';
import TypeIOContainer from '../container/TypeIOContainer';
import { Provider } from 'react-redux';
import store from '../store';

class App extends React.Component {

    render() {
        let input;

        return (
            <div>
                <ul className='event-list'>
                    {this.props.selectedItems.map( (selectedItem, index) => <li key={index}>{selectedItem}</li>)}
                </ul>
                <Provider store={store}>
                    <TypeIOContainer />
                </Provider>
                <div>
                    <button id='buttonAddEvent'
                            onClick={()=>{this.props.addSelectedItems.call(this, this.props.newSelectedItems);}}>
                        Add
                    </button>
                </div>
            </div>
        )
    }
}

export default App;
