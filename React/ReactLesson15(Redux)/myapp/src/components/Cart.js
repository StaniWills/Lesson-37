import { useDispatch, useSelector } from "react-redux"
import { addNewProductCartAction, decrCountAction, incrCountAction } from "../store/cartReducer"
import { useEffect } from "react"



function Cart(){

    console.log('Cart обновился')

    let dispatch = useDispatch()
    let cart = useSelector(store => store.cart)
    
    // ---------------------------------
    // localStorage (для cart)
    
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])


    return(
    <div>
        <h2>Корзина</h2>
        <button onClick={() => dispatch(addNewProductCartAction(prompt()))}>Добавить новый продукт</button>
        <div>
          {cart.map((elem, index) => 
          <div key={elem.id} style={{display: 'flex', gap: '10px'}}>
            <p>{elem.title}</p>
            <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
              <button onClick={() => dispatch(decrCountAction(elem.id, index))}>-</button>
              <p>{elem.count}</p>
              <button onClick={() => dispatch(incrCountAction(elem.id, index))}>+</button>
            </div>
          </div>  
          )}
        </div>
      </div>
    )
}


export default Cart