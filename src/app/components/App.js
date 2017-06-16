import React from 'react';
import TypeIO from './TypeIO';

class App extends React.Component {

    render() {
        let input;

        return (
            <div>
                <ul className='event-list'>
                    {this.props.events.map( (event, index) => <li key={index}>{event}</li>)}
                </ul>
                Enter a new event: <input id='inputTextNewEvent' type='text' ref={node => {input = node}} />
                <TypeIO />
                <div>
                    <button id='buttonAddEvent' onClick={()=>{this.props.addEvent.call(this, input.value);}}>
                        Add
                    </button>
                </div>
            </div>
        )
    }
}

export default App;
