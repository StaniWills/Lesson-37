import styles from './NotFoundPage.module.css'

function NotFoundPage(){
    return(
        <div className={styles.not_found_section}>
            <img width={1000} alt='not_found_image' src='https://drudesk.com/sites/default/files/2018-02/404-error-page-not-found.jpg'/>
        </div>
    )
}


export default NotFoundPage