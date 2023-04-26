import { useNavigate } from 'react-router-dom'
import GoodItem from '../GoodItem/GoodItem'
import styles from './GoodsList.module.css'


function GoodsList(props){

    const {goods} = props
    const navigate = useNavigate()

    const goForward = () => {
        navigate(1)
    }

    return(
        <div>
           <div>
                <button onClick={goForward}> Вернуться к товару</button>
           </div>
           <div>
            {goods.map(elem => 
                <GoodItem  
                    key={elem.id} 
                    title={elem.title} 
                    id = {elem.id}
                    price={elem.price}
                    count = {elem.rating.count}
                />    
                )} 
           </div>
        </div>
    )
}

export default GoodsList