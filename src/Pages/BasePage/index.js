import { Outlet } from "react-router-dom";
import Header from "../../Components/Header";
import MainContainer from "../../Components/MainContainer";
import CustomCursor from "../../Components/Cursor"

function BasePage(){
    return(
        <>
        <main>
            <Header/>
            <MainContainer>
                <Outlet />
            {/* <CustomCursor/>  */}
            </MainContainer>
        </main>
        </>
    )
}

export default BasePage