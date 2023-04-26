import React, { useState } from 'react'
import ProductItem from './ProductItem'
// fuer next mal
// У каждого выводимого товара должны быть кнопки (+,-) которые будут менять сво-во count только у нажатого товара по правилам икнремента/декремента.


export default function App() {

    const data = [ 
        {id: 1, name: 'Велосипед', price: 1000, count: 1}, 
        {id: 2, name: 'Самокат', price: 700, count: 1}, 
        {id: 3, name: 'Ролики', price: 1300, count: 2}, 
        {id: 4, name: 'Сноуборд', price: 19000, count: 4}
        ]
        
    let [cards, setCards ] = useState(data)
    
    let addCard = () => {

      let promtResultName = prompt('plese enter new goods')
      console.log(promtResultName);
    
      let promtResultPrice = +prompt('plese enter PRICE')
      console.log(promtResultPrice);
    
      let promtResultCount = +prompt('plese enter new count')
      console.log(promtResultCount);
      
      let id = Math.round(Math.random() * 10 + 4);

      let newCard = {id: id, name: promtResultName, price: promtResultPrice, count: promtResultCount}
      
      setCards([...cards, newCard])


       
    }
    console.log(cards);
  return (
    <div>
        <button onClick={addCard}>Add New Card</button>
        <div>
            {cards.map(elem => <ProductItem 
            key={elem.id}
            name={elem.name}
            price={elem.price}
            count={elem.count}/>)
            }
                        
        </div>
    </div>
  )
}
