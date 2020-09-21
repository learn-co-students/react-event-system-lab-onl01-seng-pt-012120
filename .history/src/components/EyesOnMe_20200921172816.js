// Code EyesOnMe Component Here
import React, {Component} from 'react';

export default class EyesOnMe extends Component{

    handelFocus = (e) =>{
        console.log("Good!")
    }

    handelBlur = (e) => {
        console.log('Hey! Eyes on me!')
    }
    render(){
        return(
            <button
            onFocus={this.handelFocus}
            onBlur={this.handelBlur}
            >Enter</button>
        )
    }
}