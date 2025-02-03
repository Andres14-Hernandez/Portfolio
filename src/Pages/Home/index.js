// import styles from "./Home.module.css"
import About from "../../Components/About"
import HomeDescription from "../../Components/HomeDescription"
import Projects from "../../Components/Projects"

function Home(){
    return(
        <>
            <HomeDescription/>
            <Projects/>
            <About />
        </>
    )
}

export default Home