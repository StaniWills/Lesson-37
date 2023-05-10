
const defaultState = [
    {id: 1, name: 'Alex', age: 19},
    {id: 2, name: 'Steven', age: 23},
    {id: 3, name: 'Neena', age: 25},
    {id: 4, name: 'John', age: 40},
    {id: 5, name: 'Lui', age: 43},
]


const DEL_FIRST_EMPL = 'DEL_FIRST_EMPL'
const DEL_LAST_EMPL = 'DEL_LAST_EMPL'
const ADD_NEW_EMPL = 'ADD_NEW_EMPL'
const REM_BY_ID = 'REM_BY_ID'
const CHANGE_AGE = 'CHANGE_AGE'
const RESET_AGE = 'RESET_AGE'

// Задание. Напишите еще 1 кейс, который будет удалять последнего сотрудника
// Реализуйте специальную кнопку на стороне компонента

export const emplReducer = (state = defaultState, action) => {
    switch(action.type){
        case DEL_FIRST_EMPL: 
            return state.filter((elem, index) => index != 0)
        case DEL_LAST_EMPL:
            return state.filter((elem, index) => index != state.length - 1)
        case ADD_NEW_EMPL:
            const [name, age] = action.payload.split(' ')
            const findElem = state.findIndex(elem => elem.name === name)
            if (findElem !== -1){
                return state.map((elem, ind) => {
                    if (ind === findElem){
                        elem.age = (isNaN(+age)) ? 0 : +age
                    }
                    return elem
                })
            } else {
                const newUser = {
                    id: Date.now(),
                    name,
                    age: (isNaN(+age)) ? 0 : +age
                }
                return [...state, newUser]
            }

        case REM_BY_ID:
            return state.filter(elem => elem.id != action.payload)  
        case CHANGE_AGE:
            // return state.map(elem => ({...elem, age: elem.age + 10}))
            let copy = [...state]
            for (let i in copy){
                    copy[i].age += 10
            }
            return copy
        case RESET_AGE:
            return state.map(elem => ({...elem, age: 0}))
        default:
            return state
    }
}

export const delFirstEmplAction = () => ({type: DEL_FIRST_EMPL})
export const delLastEmplAction = () => ({type: DEL_LAST_EMPL})
export const addNewEmplAction = (payload) => ({type: ADD_NEW_EMPL, payload})
export const remByIdAction = (payload) => ({type: REM_BY_ID, payload})
export const changeAgeAction = () => ({type: CHANGE_AGE})
export const resetAgeAction = () => ({type: RESET_AGE})


// Сделайте кнопку, которая будет увеличивать значение сво-ва age всех сотрудников на 10
// Доп задание: значение, на которое необходимо изенить age должен передаваться как payload


// Для кейса ADD_NEW_EMPL реализуйте проверку значение age
// если значение будет определяться как NaN - необходимо заменить его на 0
