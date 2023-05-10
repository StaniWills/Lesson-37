const defaultState = {
    count: 0
}

const INCR_BY_PAYLOAD = 'INCR_BY_PAYLOAD'
const DECR_BY_PAYLOAD = 'DECR_BY_PAYLOAD'

export const countReducer = (state = defaultState, action) => {
    switch (action.type){
        case INCR_BY_PAYLOAD:
            return {...state, count: state.count + action.payload}
        case DECR_BY_PAYLOAD:
            return {...state, count: state.count - action.payload}
        default:
            return state 
    }
}

// Экшн - генератор
export const incrByPayloadAction = (payload) => ({type: INCR_BY_PAYLOAD, payload})
export const decrByPayloadAction = (payload) => ({type: DECR_BY_PAYLOAD, payload})

// генератор зкшена в более понятном виде
// export function incrByPayloadAction(payload){
//     return {
//         type: 'INCR_BY_PAYLOAD',
//         payload: payload
//     }
// }

