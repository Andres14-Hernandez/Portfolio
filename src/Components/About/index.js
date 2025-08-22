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
                        I am a Front-End Developer with a background in Multimedia Engineering, passionate about creating digital interfaces 
                        that combine technology, design, and user experience. My focus is on building responsive, accessible, and high-performance 
                        websites and applications, always paying attention to detail and applying best practices for clean, maintainable code.
                        <br></br>
                        <br></br>

                        I primarily work with React, Next.js, JavaScript (ES6+), HTML5, CSS3, and TailwindCSS, tools that allow me to turn ideas 
                        into functional and engaging products. In addition, my multimedia background gives me the ability to design and produce 
                        visual content and interactive experiences, bringing extra value to my projects with a strong emphasis on usability and 
                        visual impact.
                        <br></br>
                        <br></br>

                        Throughout my academic experience and personal projects, I have worked on building dynamic interfaces, REST API integrations, 
                        and performance optimization, while applying UX/UI principles to ensure every product delivers seamless, user-centered experiences. 
                        I also have experience with Git version control and agile methodologies, which enable me to adapt easily to collaborative and 
                        remote environments.
                        <br></br>
                        <br></br>

                        I consider myself a curious, proactive, and continuously learning professional, always open to new technologies and to 
                        improving my skills. My goal is to grow as a developer by contributing to projects that create a real impact on people, 
                        bringing creativity, dedication, and an integrated vision of design and development.
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