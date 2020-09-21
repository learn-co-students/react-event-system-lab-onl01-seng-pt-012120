// Code EyesOnMe Component Here
import React, {Component} from 'react';

export default class EyesOnMe extends Component{

    handelFocus = (e) =>{
        console.log("something")
    }


    render(){
        return(
            <button
            onFocus={this.handelFocus}
            >Enter</button>
        )
    }
}