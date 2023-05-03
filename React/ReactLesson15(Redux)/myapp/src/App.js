// import './App.css';
import { useDispatch, useSelector } from "react-redux";

function App() {

  // useSelector позволяет получить с Provider значение хранилища (store)
  // В качестве аргумента указывает какой стейт необходимо получить
  let count = useSelector(store => store.count)

  // useDispach отправляет команды в reducer на изменение хранилища (store)
  let dispatch = useDispatch()

  return (
    <div>
      <div>
        <h2>Счетчик</h2>
        <h2>{count}</h2>
        
        <button onClick={() => dispatch({type: 'INCR_BY_N', payload: 1})}>Инкремент</button>
        <button onClick={() => dispatch({type: 'DECR_BY_N', payload: 1})}>Декремент</button>

        <button onClick={() => dispatch({type: 'INCR_BY_N', payload: 100})}>Добавить 100</button>
        <button onClick={() => dispatch({type: 'DECR_BY_N', payload: 100})}>Убавить 100</button>

        <button onClick={() => dispatch({type: 'INCR_BY_N', payload: +prompt()})}>Добавить N</button>
        <button onClick={() => dispatch({type: 'DECR_BY_N', payload: +prompt()})}>Убавить N</button>
      </div>
    </div>
  );
}

export default App;
