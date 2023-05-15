
const defaultState = {
    users: [
        {id: 11, name: 'Steven Wilyam'},
        {id: 12, name: 'John Snow'},
        {id: 13, name: 'Neena Stolkovich'},
    ]
}

const ADD_NEW_USER = 'ADD_NEW_USER'
const REM_USER_BY_ID = 'REM_USER_BY_ID'
const ADD_NEW_USERS_LIST = 'ADD_NEW_USERS_LIST'
const FETCH_ADD_NEW_USER = 'FETCH_ADD_NEW_USER'

export const userReducer = (state = defaultState, action) => {
    switch(action.type){
        case ADD_NEW_USER:
            let newUser = {
                id: Date.now(),
                name: action.payload
            }
            return {...state, users: [...state.users, newUser]} 
        case REM_USER_BY_ID:
            return {...state, users: state.users.filter(elem => elem.id !== action.payload)}
        case ADD_NEW_USERS_LIST:
            return {...state, users: [...state.users, ...action.payload]}
        case FETCH_ADD_NEW_USER:
            return {...state, users: [...state.users, action.payload]}
        default:
            return state
    }
}

export const addNewUserAction = (payload) => ({type: ADD_NEW_USER, payload})
export const remUserByIdAction = (payload) => ({type: REM_USER_BY_ID, payload})
export const addNewUsersListAction = (payload) => ({type: ADD_NEW_USERS_LIST, payload})
export const fetchAddNewUserAction = (payload) => ({type: FETCH_ADD_NEW_USER, payload})



// МИНИ - ДЗ 
// Реализуйте внутри редьюсера напишите проверку на валидность значения ID 
// Если указанный ID будет неверным - приложение должно вывести модальное окно alert() с сообщением
// "Указанный ID неверный"