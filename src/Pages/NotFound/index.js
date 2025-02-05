import styles from "./notFound.module.css"

function NotFound(){
    return(
        <div className={styles.container}>
            <h1>Error 404</h1>
            <p>The page doesn't existit</p>
        </div>
    )
}

export default NotFound