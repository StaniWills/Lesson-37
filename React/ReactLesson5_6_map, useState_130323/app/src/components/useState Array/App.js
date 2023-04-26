import { useState } from "react"
import UserInfo from "./UserInfo"


function App(){

    const data = [
        {id: 1 , name: 'Alex', salary: 1500},
        {id: 2 , name: 'Steven', salary: 2000},
        {id: 3 , name: 'Neena', salary: 1000},
        {id: 4 , name: 'John', salary: 4500},
        {id: 5 , name: 'King', salary: 400},
    ]

    let [users, setUsers] = useState(data)

    // Правило: если мы хотим учесть в новом значение старые записи - их необходимо указать в виде нового массива (копии)
    const addEmplHandle = () => {
        let newUser = {
            id: Date.now(), 
            name: prompt(),     
            salary: prompt()
        }   
        setUsers([newUser, ...users])
    }

    // Задание: сформировать кнопку, которая должна будет удалить последний элемент массива

    // 1) Cоздать копию массива users (чтобы учесть данные до обновления) (см правило выше)
    // 2) Изменить копию массива согласно ТЗ
    // 3) Указать измененный массив (копия!!!) в сетСтейт

    const remLastEmplHandle = () => {
        let newUsers = users.slice()
        newUsers.pop()
        setUsers(newUsers)
    }

    // Доп задание на завтра в 10:00
    // Создать кнопку, которая будет увеличивать зарпалту всех сотрудников на 10%

    return(
        <div>
            <div>
                <button onClick={addEmplHandle}>Добавить пользователя</button>
                <button onClick={remLastEmplHandle}>Удалить последнего пользователя</button>
            </div>
            <div>
                {users.map(elem => <UserInfo
                                        key = {elem.id} 
                                        name={elem.name} 
                                        salary={elem.salary}
                                    />
                                )}
            </div>
        </div>
    )
}

export default App