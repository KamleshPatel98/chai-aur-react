import React, { useState } from 'react'

function Hook() {
    let [counter, setCounter] = useState(15)

    const increment = () => {
        if(counter < 25){
            setCounter(counter + 1)
        }
    }

    const decrement = () => {
        if(counter > 0){
            setCounter(counter - 1)
        }
    }

    return (
        <>
            <h1>Hook {counter}</h1>
            <button onClick={increment}>Increment {counter}</button>
            <button onClick={decrement}>Deecrement {counter}</button>
            <p>Footer {counter}</p>
        </>
    )
}

export default Hook