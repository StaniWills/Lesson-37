import styles from './Button.module.css'


function Button(props){    
    const {title, color, ...otherProps} = props
    return(
        <button {...otherProps} className={`${styles.button_elem} ${styles[color]}`}>
            {title}
        </button>
    )
}

export default Button