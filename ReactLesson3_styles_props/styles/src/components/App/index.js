import React from 'react'
// import "./App.css"
import s from './index.module.css'
import Block from '../Block'

export default function App() {
return (
// <div className='item'>
  <>
    <div 
        className={`${s.item} ${s.block_item}`}> 
        lorem item
    </div>
    <Block/>
  </>
  )
}
