import CVicon from "../Icons/CV"
import GitHubIcon from "../Icons/GitHub"
import LinkedinIcon from "../Icons/Linkedin"
import styles from "./HomeDescription.module.css"

function HomeDescription(){
    
    
        
    

    
    return(
        <section className={styles.description}>
            <img src="assets/captcha.gif" alt="I'm not a robot" className={styles.gift}/>
            <div className={styles.description__info}>
                <h1>I'm Andrés Henández</h1>
                <p>Front-end developer</p>
            </div>
            <div className={styles.networks}>
                <GitHubIcon fill={"#E3E7EF"} />
                <LinkedinIcon fill={"#E3E7EF"} />
                <CVicon fill={"#E3E7EF"} />
            </div>
        </section>
    )
}

export default HomeDescription