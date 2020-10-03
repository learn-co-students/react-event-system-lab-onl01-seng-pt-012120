// Code EyesOnMe Component Here
import React, { Component } from 'react';

// In the components/EyesOnMe.js file, create a EyesOnMe React component.
export default class EyesOnMe extends Component {

  handleFocus = e => {
    //   When the focus event fires, use console.log to print out the text 'Good!'
    console.log('Good!')
  }

  handleBlur = e => {
    //   When the blur event fires, use console.log to print out the text 'Hey! Eyes on me!'
    console.log('Hey! Eyes on me!')
  }

  render() {
    return (
      <div>
          {/* On that button, add event handlers that listens for the focus and blur events. */}
        <button onFocus={this.handleFocus} onBlur={this.handleBlur} >Le Button</button>
      </div>
    )
  }
}