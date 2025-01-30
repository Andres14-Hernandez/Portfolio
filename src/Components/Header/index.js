import styles from "./Header.module.css"
import { Link } from "react-router-dom";


function Header(){
    return(
        <header className={styles.header}>
            <Link to="/" className={styles.link}>  <img src="img/logo.png" alt="Logo"/>  </Link>            
            <ul className={styles.list}>
                <li> <Link to="/about" className={styles.link}> About me </Link>  </li>
                <li> <Link to="/contact" className={styles.link}> Contact </Link>  </li>
            </ul>
        </header>
    )
}

export default Header