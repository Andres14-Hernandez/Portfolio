import { BrowserRouter, Route, Routes } from "react-router-dom"
import BasePage from "./Pages/BasePage"
import NotFound from "./Pages/NotFound"
import Home from "./Pages/Home"
import ContextProvaider from "./Context/ContextProvaider"

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <BasePage/> }>
                    <Route index="/home" element={<ContextProvaider> <Home/> </ContextProvaider> }/>
                    <Route path="*" element={ <NotFound/> }/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes