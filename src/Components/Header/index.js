import styles from "./Header.module.css"


function Header(){
    return(
        <header className={styles.header}>
            <img src="img/logo.png" alt="Logo"/>     
        </header>
    )
}

export default Header