// import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { decrByPayloadAction, incrByPayloadAction } from "./store/countReducer";
import { addNewEmplAction, changeAgeAction, delFirstEmplAction, delLastEmplAction, remByIdAction, resetAgeAction } from "./store/emplReducer";
import { addNewUserAction, remUserByIdAction } from "./store/userReducer";
import { fetchUserById, fetchUsersList } from "./asyncActions/users";
import { useEffect } from "react";

function App() {

  // useSelector позволяет получить с Provider значение хранилища (store)
  // В качестве аргумента указывает какой стейт необходимо получить
  let count = useSelector(store => store.count.count)
  let empl = useSelector(store => store.empl)
  let users = useSelector(store => store.users.users)

  // useDispach отправляет команды в reducer на изменение хранилища (store)
  let dispatch = useDispatch()

  // Данный useEffect позволяет выполнить фетч-запрос в момент загрузки страницы

  // useEffect(() => {
  //   dispatch(fetchUsersList())
  // }, [])

  return (
    <div>
      <div>
        <h2>Счетчик</h2>
        <h2>{count}</h2>
        
        <button onClick={() => dispatch(incrByPayloadAction(1))}>Инкремент</button>
        <button onClick={() => dispatch(decrByPayloadAction(1))}>Декремент</button>

        <button onClick={() => dispatch(incrByPayloadAction(100))}>Добавить 100</button>
        <button onClick={() => dispatch(decrByPayloadAction(100))}>Убавить 100</button>

        <button onClick={() => dispatch(incrByPayloadAction(+prompt()))}>Добавить N</button>
        <button onClick={() => dispatch(decrByPayloadAction(+prompt()))}>Убавить N</button>
      </div>
      <div>
        <h2>Сотрудники</h2>
        <button onClick={() => dispatch(delFirstEmplAction())}>Удалить первого сотрудника</button>
        <button onClick={() => dispatch(delLastEmplAction())}>Удалить последнего сотрудника</button>
        <button onClick={() => dispatch(addNewEmplAction(prompt()))}>Добавть нового сотрудника</button>
        <button onClick={() => dispatch(changeAgeAction())}>Увеличить возраст всех сотрудников</button>
        <button onClick={() => dispatch(resetAgeAction())}>Обнулить возраст всех сотрудников</button>
        <div>
          {empl.map(elem => 
            <div 
              onDoubleClick={() => dispatch(remByIdAction(elem.id))}
              key={elem.id}
            >
              <p>{elem.name} {elem.age}</p>
            </div>
          )}
        </div>
      </div>
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
    </div>
  );
}

export default App;
