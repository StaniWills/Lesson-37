import FormElem from '../FormElem/FormElem'
import Button from '../UI/Button/Button'
import styles from './Modal.module.css'
import {Routes, Route} from 'react-router-dom'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'
{/* <FontAwesomeIcon icon={faXmark}/> */}


function Modal(props){

    const {active, setActive} = props

    return(
        <div onClick={() => setActive(false)} className={`${styles.modal} ${active && styles.active}`}>
            <div onClick={(e) => e.stopPropagation()} className={`${styles.modal_content} ${active && styles.active}`}>
            <FontAwesomeIcon onClick={() => setActive(false)} icon={faXmark} style={{position: 'absolute', right: '5%'}}/>
                <Routes>
                    <Route path='/reg' element={
                        <FormElem
                            title={'Регистрация'}
                            link={'/login'}
                            input={{email: 'Почта', password: 'Пароль', secondPassword: 'Введите пароль еще раз'}}
                            button={{redirect: 'Войти', submit: 'Зарегистрироваться'}}
                            infoText={'Регстрируясь на сайте, вы соглашаетесь с нашими правилами и политикой конфиденциальности и соглашается на информационную рассылку'}
                            type={'reg'}
                        />
                    }/>
                    <Route path='/login' element={
                        <FormElem
                            title={'Авторизация'}
                            link={'/reg'}
                            input={{email: 'Почта', password: 'Пароль'}}
                            button={{redirect: 'Регистрация', submit: 'Авторизоваться'}}
                            infoText={'Введите логин и пароль вашего аккаунта'}
                            type={'login'}

                        />
                    }/>
                </Routes>
            </div>
        </div>
    )
}

export default Modal