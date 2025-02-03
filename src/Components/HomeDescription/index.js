import CVicon from "../Icons/CV"
import GitHubIcon from "../Icons/GitHub"
import LinkedinIcon from "../Icons/Linkedin"
import styles from "./HomeDescription.module.css"
import { useState } from "react"

function HomeDescription(){
 

    function EmailCopy() {
        const email = "andres14_hl@hotmail.com";
        const [copied, setCopied] = useState(false);
      
        const handleCopy = () => {
          navigator.clipboard.writeText(email).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          });
        };
      
        return (
          <div>
            <p onClick={handleCopy} className={styles.email}>
              {email}
            </p>
            {copied && <span className={styles.emailSpan}>¡Copied mail!</span>}
          </div>
        );
      }


    return(
        <section className={styles.description}>
            <img src="img/andres.png" alt="Andres"/>
            <div className={styles.description__info}>
                <h1>I'm Andrés Henández</h1>
                <p>Front-end developer</p>
                <EmailCopy/>
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