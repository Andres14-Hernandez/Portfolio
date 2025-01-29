import { Outlet } from "react-router-dom";
import Header from "../../Components/Header";
import MainContainer from "../../Components/MainContainer";

function BasePage(){
    return(
        <>
            <Header />
            <MainContainer>
                <Outlet />
            </MainContainer>
        </>
    )
}

export default BasePage