import React, { Component } from 'react';

class Keypad extends Component {
    keyPressed = () => console.log('Entering password...')

    render() {
        return <input type="password" onKeyUp={this.keyPressed}></input>
    }

}

export default Keypad