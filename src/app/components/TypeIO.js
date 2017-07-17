import React from 'react';
import 'jquery';
import 'typeio';

class TypeIO extends React.Component {

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