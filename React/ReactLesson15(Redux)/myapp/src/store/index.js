import {applyMiddleware, combineReducers, createStore} from 'redux'
import { countReducer } from './countReducer'
import { emplReducer } from './emplReducer'
import { userReducer } from './userReducer'
// thunk - библиотека, позволяющая работать с асинхронным кодом внутри redux храналища
import thunk from 'redux-thunk'
import { cartReducer } from './cartReducer'

// combineReducers объединяет несколько редьюсеров
const rootReducer = combineReducers({
    count: countReducer,
    empl: emplReducer,
    users: userReducer,
    cart: cartReducer
})


export const store = createStore(rootReducer, applyMiddleware(thunk))