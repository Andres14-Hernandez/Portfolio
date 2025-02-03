import { ProjectProvider } from "./ProjectContext";
import { SkillsProvider } from "./SkillsContext";

function ContextProvaider({children}){
    return(
        <ProjectProvider>
            <SkillsProvider>
                {children}
            </SkillsProvider>
        </ProjectProvider>
    )   
}

export default ContextProvaider