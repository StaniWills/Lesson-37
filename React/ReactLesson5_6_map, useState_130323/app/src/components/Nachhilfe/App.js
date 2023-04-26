import React, { useState } from 'react'

export default function App() {

    let [ num, setNum ] = useState(0)

    const increment = () => {
            if(num <10){
                setNum(++num)
            }
    }

    const decrement = () => {
        if(num >0){
            setNum(--num)
        }
    }

    const reset =() => {
        setNum(0)
    }

  return (
    <>
    <div>
        <p>{num}</p>
        <button onClick={increment}> + </button>
        <button onClick={decrement}> - </button>
    </div>

    <div>
        <button onClick={reset}>Reset</button>
    </div>
    </>

  )
}
