import {createStore} from 'redux'


const defaultStore = {
    count: 0
}


const reducer = (store = defaultStore, action) => {
    switch (action.type){
        case 'INCR_BY_N':
            return {...store, count: store.count + action.payload}
        case 'DECR_BY_N':
            return {...store, count: store.count - action.payload}
        default:
            return store 
    }
}


export const store = createStore(reducer)


// Добавить в reducer 2 кейса, которые будут добавлять и убавлять значение стейта на 100
// На стороне компонента сделать 2 кнопки

