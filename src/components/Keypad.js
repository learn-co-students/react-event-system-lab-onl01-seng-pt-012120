import React from 'react'

class Keypad extends React.Component {
    keyupHandler = () => console.log("Entering password...")
    render() {
        return (
            <div>
                <input
                    type="password"
                    onKeyUp={ this.keyupHandler }
                >
                </input>
            </div>
        )
    }
}

export default Keypad