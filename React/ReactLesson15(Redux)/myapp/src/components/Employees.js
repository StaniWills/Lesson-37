import { useDispatch } from "react-redux"
import { addNewEmplAction, changeAgeAction, delFirstEmplAction, delLastEmplAction, resetAgeAction } from "../store/emplReducer"



function Employees({empl}){

    console.log('Employees обновился')

    let dispatch = useDispatch()

    return(
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
    )
}


export default Employees