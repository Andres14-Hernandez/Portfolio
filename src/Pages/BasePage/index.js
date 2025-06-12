import { Outlet } from "react-router-dom";
import Header from "../../Components/Header";
import MainContainer from "../../Components/MainContainer";

function BasePage(){
    return(
        <>
        <main>
            <Header/>
            <MainContainer>
                <Outlet />
            </MainContainer>
        </main>
        </>
    )
}

export default BasePage