import { useDispatch } from "react-redux"
import { addNewUserAction, remUserByIdAction } from "../store/userReducer"
import { fetchUserById, fetchUsersList } from "../asyncActions/users"



function Users({users}){

    console.log('Users обновился')


    let dispatch = useDispatch()

    // ----------------------------
    // Данный useEffect позволяет выполнить фетч-запрос в момент загрузки страницы

    // useEffect(() => {
    //   dispatch(fetchUsersList())
    // }, [])

    return(
    <div>
        <h2>Пользователи</h2>
        <button onClick={() => dispatch(addNewUserAction(prompt()))}>Добавить нового юзера</button>
        <button onClick={() => dispatch(fetchUsersList())}>Добавить список пользователей (Async)</button>
        <button onClick={() => dispatch(fetchUserById(prompt()))}>Добавить пользователя по ID (Async)</button>
        <ul>
          {users.map(elem => 
            <li 
              key={elem.id}
              // onClick={() => dispatch(remUserByIdAction(elem.id))}
            >
              {elem.name}
              <button onClick={() => dispatch(remUserByIdAction(elem.id))}>X</button>
            </li>    
          )}
        </ul>
    </div>
    )
}


export default Users