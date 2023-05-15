const data = [
    {id: 1, title: 'Велосипед', count: 5},
    {id: 2, title: 'Самокат', count: 4},
    {id: 3, title: 'Гантели', count: 7},
    {id: 4, title: 'Ракетки', count: 1}
 ]

// ?? (оператор нулевого слияния)
// Если JSON.parse(localStorage.getItem('cart')) вернет null (иил undefined), тогда к defaultState применится
// значение переменной data. 
// если JSON.parse(localStorage.getItem('cart')) будет отличим от null (или undefined), тогда 
// выражение defaultState будет хранить результат работы JSON.parse(localStorage.getItem('cart'))

const defaultState = JSON.parse(localStorage.getItem('cart')) ?? data


const INCR_COUNT = 'INCR_COUNT'
const DECR_COUNT = 'DECR_COUNT'
const ADD_NEW_PRODUCT_CART = 'ADD_NEW_PRODUCT_CART'
 

function incrProductHanlder(array, id){
    return array.map(elem => {
        if (elem.id === id){
            if(elem.count < 25){
                elem.count++
            } else {
                alert('Значение count не может быть больше 25')
            }
        } 
        return elem
    })
}

export const cartReducer = (state = defaultState, action) => {
    switch(action.type){
        case INCR_COUNT:
            return incrProductHanlder(state, action.payload.id)
        case DECR_COUNT:
            if (state[action.payload.index].count === 1){
                return state.filter(elem => elem.id !== action.payload.id)
            } else {
                return state.map(elem => {
                    if (elem.id === action.payload.id){
                            elem.count--
                    }
                    return elem
                })
            }
        case ADD_NEW_PRODUCT_CART:
            let findElem = state.find(elem => elem.title === action.payload)
            if (findElem){
                return incrProductHanlder(state, findElem.id)
            } else {
                let newProductCart = {
                    id: Date.now(),
                    title: action.payload,
                    count: 1
                }
                return [...state, newProductCart]
            }
            
        default:
            return state
    }
}


export const incrCountAction = (id, index) => ({type: INCR_COUNT, payload: {id, index}})
export const decrCountAction = (id, index) => ({type: DECR_COUNT, payload: {id, index}})
export const addNewProductCartAction = (payload) => ({type: ADD_NEW_PRODUCT_CART, payload})


// МИНИ-ДЗ (обязательное ДЗ)
// Необходимо полностью разобрать написанный редьюсер (понять как работают все кейса и генераторы экшена)
// На следующем занятии задать список вопросов по редьюсера