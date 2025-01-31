import styles from "./ProyectContainer.module.css"


function ProyectContainer(props){

    const {title, image, description} = props.data


    return(
        <div className={styles.container}>
            <img src={image} alt={title}/>
            <div className={styles.textContainer}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ProyectContainer