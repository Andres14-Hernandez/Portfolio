import ProjectContainer from "../ProjectContainer"
import styles from "./proyects.module.css"
import { useProjects } from "../../Context/ProjectContext";


function Proyects(){

    const projects = useProjects();


    return(
        <>
            <h1 className={styles.title}>My Proyects</h1>
                {projects.map((proyect, index)=>(
                        <ProjectContainer 
                            key={index} 
                            data={proyect}
                        />))
                }
        </>
    )
}

export default Proyects