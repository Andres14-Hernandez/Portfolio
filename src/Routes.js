import { BrowserRouter, Route, Routes } from "react-router-dom"
import BasePage from "./Pages/BasePage"
import NotFound from "./Pages/NotFound"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <BasePage/> }>
                    <Route index="/home" element={ <Home/> }/>
                    <Route path="/about" element={ <About/> }/>
                    <Route path="/contact" element={ <Contact/> }/>
                    <Route path="*" element={ <NotFound/> }/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes