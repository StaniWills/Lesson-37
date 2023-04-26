import { useState } from "react"

// Задание 1. 
// Реализовать кнопку, которая будет декрементировать значение состояния count

// Задание 2. 
// Реализовать 2 кнопки, которые будут увеличивать и уменьшать актуальное состояние на 100

// Задание 3.
// a) Cоздать кнопку, которая обнулит состояние count (значение 0)
// б) Создать еще две кнопки, которые будут увеличивтаь и уменьшать значение count. 
//    Значение должно подтягиваться с модального онка.

// Задание 4.
// Для последних двух кнопок реализовать фнукции, которые будут осуществлять проверку. 
// Если итоговый результат модального окна будет вычисляться как NaN - setCount вызываться не должен

function App(){

    let [count, setCount] = useState(0)

    const addHandle = () => {
        let answer = +prompt()
        if (!isNaN(answer)){
            setCount(count + answer)
        }
    }

    const rmHandle = () => {
        let answer = +prompt()
        if (!isNaN(answer)){
            setCount(count - answer)
        }
    }

    // const handle = (sign) => {
    //     let answer = +prompt()
    //     if (!isNaN(answer)){
    //         if (sign == '+'){
    //             setCount(count + answer)
    //         } else if (sign == '-'){
    //             setCount(count - answer)
    //         }
    //     }
    // }

    return(
        <div>
            <h2>{count}</h2>
            <div>
                <button onClick={() => setCount(++count)}>Инкремент</button>
                <button onClick={() => setCount(--count)}>Декремент</button>
            </div>
            <div>
                <button onClick={() => setCount(count + 100)}>Добавить 100</button>
                <button onClick={() => setCount(count - 100)}>Убрать 100</button>
            </div>
            <div>
                <button onClick={() => setCount(0)}>Reset</button>
                <button onClick={addHandle}>Добавить n</button>
                <button onClick={rmHandle}>Убрать n</button>
            </div>
        </div>
    )
}

export default App