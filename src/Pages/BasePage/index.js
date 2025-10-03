import { Outlet } from "react-router-dom";
import Header from "../../Components/Header";
import MainContainer from "../../Components/MainContainer";

function BasePage(){
    return(
        <>
        <main>
            <MainContainer>
                <Outlet />
            </MainContainer>
            <Header/>
        </main>
        </>
    )
}

export default BasePage