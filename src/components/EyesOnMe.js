// Code EyesOnMe Component Here
import React from 'react';


export default class EyesOnMe extends React.Component{
    constructor(props){
        super()
    }

    blur(event){
        console.log('Hey! Eyes on me!')
    }

    focus(event){
        console.log('Good!')
    }
render(){
    return (
        <button onFocus={this.focus} onBlur={this.blur}>button</button>
    )
}
}