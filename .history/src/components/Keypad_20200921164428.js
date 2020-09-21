// Code Keypad Component Here
import React, {Component} from 'react';

export default class Keypad{


    render(){
        return(
            <input 
            type='password'
                onKeyUp={console.log('Entering password...')}></input>
        )
    }
}