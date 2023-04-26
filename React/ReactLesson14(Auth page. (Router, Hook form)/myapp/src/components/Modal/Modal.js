import FormElem from '../FormElem/FormElem'
import Button from '../UI/Button/Button'
import styles from './Modal.module.css'
import { Routes, Route } from 'react-router-dom'


function Modal(props){

    const {active, setActive} = props

    return(
        <div className={`${styles.modal} ${active && styles.active}`}>
            <div className={`${styles.modal_content} ${active && styles.active}`}>
                <Routes>
                    <Route path='/reg' element={
                        <FormElem
                            title={'Registration'}
                            link={'/login'}
                            input ={{email: 'Email', password: 'Password'}}
                            button={{redirect: 'Betreten', submit: 'Registieren'}}
                            infoText={'Регстрируясь на сайте, вы соглашаетесь с нашими правилами и политикой конфиденциальности и соглашается на информационную рассылку'}
                        />
                    }/>

                    <Route path='/login'element={
                        <FormElem
                            title={'Genehmigung'}
                            link={'/reg'}
                            input ={{email: 'Email', password: 'Password'}}
                            button={{redirect: 'Registieren', submit: 'Betreten'}}
                            infoText={'Введите логин и пароль вашего аккаунта'}
                        />
                    }/>
                </Routes>
                <button onClick={() => setActive(false)}>X</button>
            </div>
        </div>
    )
}

export default Modal