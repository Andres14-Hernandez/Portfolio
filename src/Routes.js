import { BrowserRouter, Route, Routes } from "react-router-dom"
import BasePage from "./Pages/BasePage"
import NotFound from "./Pages/NotFound"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import { ProyectProvider } from "./Context/ProyectContext";
import { SkillsProvider } from "./Context/SkillsContext"

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <BasePage/> }>
                    <Route index="/home" element={<ProyectProvider> <Home/> </ProyectProvider> }/>
                    <Route path="/about" element={ <SkillsProvider> <About/> </SkillsProvider>}/>
                    <Route path="/contact" element={ <Contact/> }/>
                    <Route path="*" element={ <NotFound/> }/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes