import styles from "./mainContainer.module.css"

function MainContainer({children}) {
    return(
        <section className={styles.container}>
            {children}                
        </section>
    )
}

export default MainContainer;