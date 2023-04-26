import { useNavigate } from 'react-router-dom'
import styles from './Header.module.css'

function Header(){

    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }



    return(
        <div className={styles.header_wrapper}>
            <div className={styles.logo}></div>
            <button onClick={goBack} >Назад</button>
            <div className={styles.menu_wrapper}>
                <a href='/'>Home</a>
                <a href='/goods'>Goods</a>
                <a href='/about'>About</a>
                <a href='/contacts'>Contacts</a>
            </div>
        </div>
    )
}

export default Header