// Code Keypad Component Here
import React, { Component } from 'react';

export default class Keypad extends Component {

// On that input, add an event handler that listens for the keyUp event.
    handleKeyUp = (e) => {
        // When that event fires, use console.log to print out the text 'Entering password...'.
        console.log("Entering password...")
    }


render() {
    return (
        <div>
            <input type="password" onKeyUp={this.handleKeyUp} />
        </div>
        )
    }
}