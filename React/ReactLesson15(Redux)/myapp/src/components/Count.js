import { useDispatch } from "react-redux"
import { decrByPayloadAction, incrByPayloadAction } from "../store/countReducer"


function Count({count}){

    console.log('Count обновился')

    // useDispach отправляет команды в reducer на изменение хранилища (store)
    let dispatch = useDispatch()

    return (
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
        )
}



export default Count