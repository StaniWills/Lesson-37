import { addNewUsersListAction, fetchAddNewUserAction } from "../store/userReducer"

// Асихронный запрос формируется в виде функции, которая возвращает другую анонимную функцию
// Внутри анонимной функции выполняется запрос, который после получения результата вызывает
// геренатор экшена и передает сам результат в качестве аргумента

export const fetchUsersList = () => {
    return function(dispatch){
        const url = 'https://jsonplaceholder.typicode.com/users'
        fetch(url)
            .then(res => res.json())
            .then(data => dispatch(addNewUsersListAction(data)))
    }
}

export const fetchUserById = (id) => {
    return function(dispatch){
        const url = `https://jsonplaceholder.typicode.com/users/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => dispatch(fetchAddNewUserAction(data)))
    }
}



