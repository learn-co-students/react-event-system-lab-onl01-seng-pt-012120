import React from 'react'

class EyesOnMe extends React.Component {
    render() {
        return(
            <div>
                <button
                onFocus={() => console.log("Good!")}
                onBlur={() => console.log("Hey! Eyes on me!")}
                >
                    EyesOnMe
                </button>
            </div>
        )
    }
}

export default EyesOnMe