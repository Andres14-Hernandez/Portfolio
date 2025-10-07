import { Link } from "react-router-dom"
import styles from "./ProjectContainer.module.css"


function ProjectContainer(props){

    const {title, image, description, link} = props.data


    return(
        <div className={styles.container}>
            <div className={styles.img_container}>
                <img src={image} alt={title}/>
            </div>
            <div className={styles.textContainer}>
                <h3>{title}</h3>
                <p>{description}</p>
                <Link to={link} target="_blank" className={styles.link}>Demo</Link>
            </div>
        </div>
    )
}

export default ProjectContainer