import { useState } from "react"


function App(){

    // const [state, setState] = useState()

    // state - это состояние, которые может передавать абсолютно любые данные
    // setState - это функция, которая перезаписывает state и заставляет компонент обновиться

    // Правило нейминга
    // post        setPost
    // product     setProduct

    let [count, setCount] = useState(0)

    // функция handle вызывает сетСтейт setCount, который перезаписывает значение стейта count и обновляет компонент
    const handle = () => {
        setCount(++count)
    }

    return(
        <div>
            <h2>{count}</h2>
            <button onClick={handle}>Клик!</button>
        </div>
    )
}

export default App


