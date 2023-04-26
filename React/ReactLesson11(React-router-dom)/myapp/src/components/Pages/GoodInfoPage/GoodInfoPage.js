import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import styles from './GoodInfoPage.module.css'


function GoodInfoPage(){

    let [product, setProduct] = useState({})
    let {id} = useParams()
    let navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }

    const goHome = () => {
        navigate('/')
    }

    useEffect(() => {
        let url = `https://fakestoreapi.com/products/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    },[])

    console.log(product)
    
    return(
        <div className={styles.list_wrapper}>

            <button onClick={goBack}>Назад</button>
            <button onClick={goHome} >Домой</button>

           <h1>{product.title}</h1>
           <p>{product.rating?.rate}</p>
           <img width={500} height={500} src={product.image}/>
        </div>
    )
}

export default GoodInfoPage