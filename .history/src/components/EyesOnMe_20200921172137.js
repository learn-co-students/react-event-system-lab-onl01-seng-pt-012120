// Code EyesOnMe Component Here
import React, {Component} from 'react';

export default class EyesOnMe extends Component{

    handelFocus = (e) =>{
        console.log("Sending password")
    }


    render(){
        return(
            <button
            focus={this.handelFocus}
            >Enter</button>
        )
    }
}