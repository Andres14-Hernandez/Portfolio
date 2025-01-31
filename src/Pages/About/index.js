import styles from "./about.module.css"
import { useSkills } from "../../Context/SkillsContext";
import ElementList from "../../Components/ElementList";

function About(){

    const skills = useSkills();

    return(
        <section>
            <h1>About Me</h1>
            <div className={styles.container}>
                <div className={styles.text}>
                    <p>Description</p>
                </div>
                <div className={styles.skills}>
                    <ul className={styles.list}>
                        {skills.map((skill, index)=>(
                            <ElementList 
                                key={index}
                                data={skill}
                            />
                        ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default About