import React, { Component } from 'react';


export default class Keypad extends Component {
    constructor(){
        super()
    }

    handleKeyEvent = ()=>
        console.log('Entering password...')
    

    render() {
        return (
            <div>            
                <input onKeyUp={this.handleKeyEvent} type='password' />
            </div>
        )
    }
}
