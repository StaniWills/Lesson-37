import { useState } from "react"
import './App.css'


function App(){

    let [color, setColor] = useState('red')
    let [size, setSize] = useState('')

    const colorHandle = () => {
        setColor('blue')
    }

    const sizeHandle = () => {
        setSize('big')
    }

    return(
        <div>
            <div 
                // стейт size ииспользуется как значение className (либо пустой, либо 'big')
                className={`item ${size}`} 
                // стейт color используется как параметр css сво-йса
                style={{backgroundColor: color}}>
            </div>
            <button onClick={colorHandle}>Поменять фон на синий</button>
            <button onClick={sizeHandle}>Увеличить размер</button>
        </div>
    )
}

export default App