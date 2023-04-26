import { useCallback, useEffect, useRef, useState } from 'react';
import './App.css';


function App() {
  let [number, setNumber] = useState([1,2,3,4,5])

  // Задача useRef - создание объекта, значение которого после обновления не будет переопределяться
  // Дополнительно хранит всегда актуальные данные (даже если мы его используем в useCallback)
  // useRef далее заменяет querySelector и тд внутри react приложения
  let ulRef = useRef()

  // Пример useRef, который содержит не только target тега, но также может хранить число, строку, массив и тд
  let numberRef = useRef()

  // Обновление numberRef
  numberRef.current = number 

  const addNumber = () => {
    setNumber([...number, number.length + 1])
  }

  const stopScroll = () => {
    ulRef.current.removeEventListener('scroll', handler)
  }

  // useCallback - это хук, который позволяет функции не переопределяться после
  // обновления компонента. 
  // Хук позволяет указать зависимости (режим работы, когда нужно или не нужно перопределять функцию)
  // так же, как это делает useEffect

  const handler = useCallback(() => {
    console.log('scroll!', number , numberRef.current)
  },[])

  useEffect(() => {
    ulRef.current.addEventListener('scroll', handler)
  }, [])

  return (
    <div>
      {/* Указание рефа внутри тега используя атрибут ref */}
      <ul ref={ulRef}>
        {number.map((elem, i) => 
          <li key={i}>
            {elem}
          </li>  
        )}
      </ul>
      <button onClick={addNumber}>Добавить новый элемент</button>
      <button onClick={stopScroll}>Остановить событие</button>
    </div>
  );
}

export default App;
