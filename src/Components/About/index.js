import styles from "./about.module.css"
import { useSkills } from "../../Context/SkillsContext";
import ElementList from "../../Components/ElementList";


function About(){

    const skills = useSkills();

    return(
        <section>
            <h1 className={styles.title}>About Me</h1>
            <div className={styles.container}>
                <div className={styles.text}>
                    <p>
                        Front-end Developer with background in UX/UI design and multimedia, 
                        skilled in creating responsive and user-centered interfaces. My experience in React, 
                        JavaScript, and graphic design allows me to deliver visually engaging and highly 
                        functional web applications. I constantly learning new technologies and methodologies 
                        to enhance my development process and contribute innovative solutions to every project.
                    </p>
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