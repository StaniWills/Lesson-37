import { forwardRef } from 'react'
import styles from './Input.module.css'

const Input = forwardRef((props, ref) =>{
    return(
        <input ref={ref} {...props} className={styles.input_elem}/>
    )
})


export default Input