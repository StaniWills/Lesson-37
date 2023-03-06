import React from 'react'
import Block from '../Block/Block'

function App() {
  return (
    <div>
        <Block title={'Title 1'} text={10} color = {'red'} size = {'l'}/>
        <Block title={'Title 2'} text={20} color = {'green'} size = {'m'}/>
        <Block title={'Title 3'} text={30} color = {'yellow'} size = {'xl'}/>
    </div>
  )
}

export default App
