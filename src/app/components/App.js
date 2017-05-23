import React from 'react';

class App extends React.Component {
    render() {
        let input;

        return (
            <div>
                <ul className='event-list'>
                    {this.props.events.map( (event, index) => <li key={index}>{event}</li>)}
                </ul>
                Enter a new event: <input id='inputTextNewEvent' type='text' ref={node => {input = node}} />
                <button id='buttonAddEvent' onClick={()=>{this.props.addEvent.call(this, input.value);}}>
                    Add
                </button>
            </div>
        )
    }
}

export default App;