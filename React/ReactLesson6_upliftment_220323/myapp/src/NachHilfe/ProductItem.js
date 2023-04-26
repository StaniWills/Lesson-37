import React from 'react'

export default function ProductItem({name, price, count}) {
  // const (name, price, count) = props



  return (

    <div style={{width: '200px', 
                height: '250px', 
                border: '1px solid black',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                }}>





        <h3 style={{margin: '0'}}>{name}</h3>
        <p>{price}</p>
        <div style={{display: 'flex', gap: '10px'}}>
            <button style={{backgroundColor: 'white', border: 'none'}}>+</button>
            <p style={{margin: '0'}}>{count}</p>
            <button style={{backgroundColor: 'white', border: 'none'}}>-</button>
        </div>
    </div>
  )
}
