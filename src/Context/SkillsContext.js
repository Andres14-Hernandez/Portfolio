import { createContext, useContext } from "react";

const SkillsContext = createContext();

const SkillssData = [
  {
    title: "Skill 1",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Skill 2",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Skill 3",
    image: "https://via.placeholder.com/150",
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