import React from 'react';
import TypeIOContainer from '../container/TypeIOContainer';
import FormApi from '../apis/FormApi';

class App extends React.Component {
    render() {
        return ( <div>
            <ul className='event-list'>
                {this.props.selectedItems.map((selectedItem, index) => <li key={index}>{selectedItem}</li>)}
            </ul>
            <TypeIOContainer />
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
