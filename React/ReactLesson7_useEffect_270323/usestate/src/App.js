import { useEffect, useState } from "react"

// useEffect - это функция, которая позволяет выполнять псевдо-процесс в случае, если компонент
// будет переходить в новое состояние

// Режимы работы: 

// 1) Выполнение процеcса в момент МОНТИРОВАНИЯ + ОБНОВЛЕНИЕ
// 2) Выполнение процеcса в момент МОНТИРОВАНИЯ
// 3) Выполнение процеcса в момент МОНТИРОВАНИЯ + ОБНОВЛЕНИЕ (УКАЗАВ ЗАВИСИМОСТЬ ИЗМЕНЕНИЯ STATE)

function App(){
    let [count1, setCount1] = useState(0)
    let [count2, setCount2] = useState(0)

    // Первый режим работы
    useEffect(() => {
        console.log('Первый режим работы','МОНТИРОВАНИЕ + ОБНОВЛЕНИЕ')
    })

    // Второй режим работы
    useEffect(() => {
        console.log('Второй режим работы','МОНТИРОВАНИЕ')
    }, [])

    // Третий режим работы
    useEffect(() => {
        console.log('Третий режим работы','МОНТИРОВАНИЕ + ОБНОВЛЕНИЕ COUNT1')
    }, [count1])

    // Задание:
    // Напишите useEffect, который будет инкрементировать count1 только в том случае, 
    // если будет обновлен count2

    useEffect(()=> {
        setCount1(++count1)
    }, [count2])

    // Данной лог будет отрабатывать до useEffect
    // console.log('ИНИЦИАЛИЗАЦИЯ')

    // ---------------------
    // Лучше так не делать, потому что данный useEffect вызовет бесконечное выполнение setState()
    // useEffect(() => {
    //     setCount1(++count1)
    // })

    return(
        <div>
            <div>
                <h1>{count1}</h1>
                <div>
                    <button onClick={() => setCount1(++count1)}>Клац count1</button>
                </div>
            </div>
            <div>
                <h1>{count2}</h1>
                <div>
                    <button onClick={() => setCount2(++count2)}>Клац count2</button>
                </div>
            </div>
        </div>
    )
}


export default App