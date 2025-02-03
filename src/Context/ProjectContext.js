import { createContext, useContext } from "react";

const ProjectContext = createContext();

const projectsData = [
  {
    title: "DevHub",
    image: "img/img-DevHub.png",
    description: "A small space for big minds to find and share knowledge in development. A React-based application where users can upload and organize videos into categories focused on web development.",
    link: "https://dev-hub-vert.vercel.app/"
  },
  {
    title: "Cajicá 360°",
    image: "img/cajica-360.png",
    description: "A virtual tour of Cajicá, allowing users to explore and connect with local tourism service providers.",
    // link: "https://360.turismocajica.gov.co/"
    link: "https://cajica360.vercel.app/"
  },
  {
    title: "Proyecto 2",
    image: "https://via.placeholder.com/150",
    description: "Descripción del Proyecto 2.",
    link: "https://dev-hub-vert.vercel.app/"
  },
  
];


export const ProjectProvider = ({ children }) => {
  return (
    <ProjectContext.Provider value={projectsData}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjects = () => useContext(ProjectContext);
