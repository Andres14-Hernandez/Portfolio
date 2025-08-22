import { createContext, useContext } from "react";
import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiJavascript, SiTypescript } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { FaGitAlt, FaGithub } from "react-icons/fa6";



const SkillsContext = createContext();

const SkillssData = [
  {
    title: "React",
    icon: <FaReact/>,
  },
   {
    title: "Next.js",
    icon: <RiNextjsLine />,
  },
   {
    title: "TypeScript",
    icon: <SiTypescript />,
  },
  {
    title: "JavaScript",
    icon: <SiJavascript/>,
  },
  {
    title: "HTML",
    icon: <FaHtml5 />,
  },
  {
    title: "CSS",
    icon: <FaCss3Alt/>,
  },
    {
    title: "Git",
    icon: <FaGitAlt/>,
  },
  {
    title: "Github",
    icon: <FaGithub/> ,
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