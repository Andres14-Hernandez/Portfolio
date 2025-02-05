import { FaGithub, FaLinkedin,  } from "react-icons/fa";
import { IoDocumentAttachOutline } from "react-icons/io5";
import styles from "./HomeDescription.module.css"
import { useState } from "react"
import { Link } from "react-router-dom";

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
              <div className={styles.linkContainer}>
                <Link to={"https://github.com/Andres14-Hernandez"} target="_blank">
                  <FaGithub className={styles.icon} />
                </Link>
                <p>Github</p>
              </div>
              <div className={styles.linkContainer}>
                <Link to={"https://www.linkedin.com/in/andres14hernandez/"} target="_blank">
                  <FaLinkedin className={styles.icon} />
                </Link>
                <p>Linkedin</p>
              </div>
              <div className={styles.linkContainer}>
                <Link to={""} target="_blank">
                  <IoDocumentAttachOutline className={styles.icon} />
                </Link>
                <p>Curriculum</p>
              </div>
            </div>
        </section>
    )
}

export default HomeDescription