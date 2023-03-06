import React from 'react'
import Block from '../Block/Block'

function App() {
  return (
    <div>
        <Block title={'Title 1'} text={10} color = {'red'} size = {'l'} isRead={false}/>
        <Block title={'Title 2'} text={20} color = {'green'} size = {'m'} isRead={false}/>
        <Block title={'Title 3'} text={30} color = {'yellow'} size = {'xl'} isRead={true}/>
    </div>
  )
}

export default App

// Задание 3 (ДЗ)
// Передайте в компонент block 5 проп (isRead), который принимает булевый тип
// Если компонент block получит true - тогда необходимо помимо h2 и p, сформировать еще один p 
// с текстовым сво-вом 'Read'
// Если компонент block получит false - нужно оставить только h2 и p