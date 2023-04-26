// 1) Все компоненты унаследуют стили из App.css
// import './App.css'

// 2) Доступ к стилям получит только компонент App из App.module.css
import app from './App.module.css'

import Block from '../Block/Block'

function App(){
    return(
        <div>
            {/* <div className='item'> */}
            <div className={`${app.item} ${app.yellow}`}>
                123
            </div>
            <Block/>
        </div>
    )
}

export default App
