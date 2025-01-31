import ProyectContainer from "../ProyectContainer"
import styles from "./proyects.module.css"
import { useProyects } from "../../Context/ProyectContext";


function Proyects(){

    const proyects = useProyects();


    return(
        <>
            <h1 className={styles.title}>My Proyects</h1>
                {proyects.map((proyect, index)=>(
                        <ProyectContainer 
                            key={index} 
                            data={proyect}
                        />))
                }
        </>
    )
}

export default Proyects