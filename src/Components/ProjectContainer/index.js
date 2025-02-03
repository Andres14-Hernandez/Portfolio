import { Link } from "react-router-dom"
import styles from "./ProjectContainer.module.css"
import ClickIcon from "../Icons/Click"


function ProjectContainer(props){

    const {title, image, description, link} = props.data


    return(
        <div className={styles.container}>
            <img src={image} alt={title}/>
            <div className={styles.textContainer}>
                <h3>{title}</h3>
                <p>{description}</p>
                <Link to={link} target="_blank" className={styles.link}> <ClickIcon/> </Link>
            </div>
        </div>
    )
}

export default ProjectContainer