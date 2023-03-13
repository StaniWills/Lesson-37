import React from 'react'
import Block from './Block'


export default function App() {

  const data = [
    {id: 1, title: 'Taitl 1', text: 'Text 1'},
    {id: 2, title: 'Taitl 2', text: 'Text 2'},
    {id: 3, title: 'Taitl 3', text: 'Text 3'},
    {id: 4, title: 'Taitl 4', text: 'Text 4'},
  ]

  return (
    <div>
      {data.map(elem => <Block 
                          key={elem.id} 
                          title={elem.title} 
                          text={elem.text} 
                          id={elem.id}
                          />)}
    </div>
  )
}

