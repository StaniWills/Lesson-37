import React from 'react'
import s from './FormElem.module.css'
import { Link } from 'react-router-dom'
import Button from '../UI/Button/Button'
import {useForm} from 'react-hook-form'
import Input from '../Input/Input'

export default function FormElem(props) {

    const {title, link, button, input, infoText}= props

    const {
        register,
        handleSubmit,
        formState: {errors},
        reset
    } = useForm()

    const emailElem = register('email', {
        required: 'Почта должна быть заполнена!',
        pattern: {
            value: /^([A-z])+([0-9-_.])*([A-z0-9-_.])*@([A-z])+([0-9-_.])*([A-z0-9-_.])*[.]([A-z]){2,3}$/,
            message: 'Указана неверная почта'
        }
    })

    const onSubmit = (data) => {
        console.log(data);
    }

  return (

    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <h2>{title}</h2>

        <p>{input.email}</p>
        <Input {...emailElem}/>

        <div>
            {errors.email && <p className={s.warning_text}>{errors.email.message}</p>}
        </div>

        <p className={s.info_Text}>{infoText}</p>

        <Button title={button.submit} color='yellow'/>

        <Link to={link}>
            <Button title={button.redirect} color='white'/>
        </Link>
        </form>
    </div>
  )
}
