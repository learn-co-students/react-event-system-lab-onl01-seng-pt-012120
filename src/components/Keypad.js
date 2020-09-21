import React, { Component } from 'react';

export default class Keypad extends Component {

  handleThis = (e) => {
    console.log("Entering password...")
  }

  render() {
    return (
      <div>
        <input type="password" onKeyUp={this.handleThis} />
      </div>
    )
  }
}