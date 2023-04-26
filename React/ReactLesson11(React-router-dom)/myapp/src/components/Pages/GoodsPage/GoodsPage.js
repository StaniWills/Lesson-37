import { useEffect, useState } from 'react'
import styles from './GoodsPage.module.css'
import GoodsList from '../../GoodsList/GoodsList'

function GoodsPage(){

    let [goods, setGoods] = useState([])

    useEffect(() => {
        let url = 'https://fakestoreapi.com/products'
        fetch(url)
            .then(res => res.json())
            .then(data => setGoods(data))
    },[])


    return(
        <div className={styles.goods_section}>
            <h1>Goods online shopping</h1>
            <GoodsList goods={goods}/>
        </div>
    )
}

export default GoodsPage