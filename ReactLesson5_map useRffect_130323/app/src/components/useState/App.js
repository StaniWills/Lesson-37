import React, { useState } from 'react'

export default function App() {

    // const [state, setState] = useState()

    let [count, setCount] = useState(0)

    const handle = () => {
        setCount(++count)
    }


  return (
        <div>
            <h2>{count}</h2>
            <button onClick={handle}>Click!</button>
        </div>
  )
}
