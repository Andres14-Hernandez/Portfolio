import { createContext, useContext } from "react";
import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaGitAlt, FaGithub } from "react-icons/fa6";



const SkillsContext = createContext();

const SkillssData = [
  {
    title: "React",
    icon: <FaReact/>,
  },
  {
    title: "JavaScript",
    icon: <SiJavascript/>,
  },
  {
    title: "Git",
    icon: <FaGitAlt/>,
  },
  {
    title: "Github",
    icon: <FaGithub/> ,
  },
  {
    title: "HTML",
    icon: <FaHtml5 />,
  },
  {
    title: "CSS",
    icon: <FaCss3Alt/>,
  },
];


export const SkillsProvider = ({ children }) => {
  return (
    <SkillsContext.Provider value={SkillssData}>
      {children}
    </SkillsContext.Provider>
  );
};

export const useSkills = () => useContext(SkillsContext);