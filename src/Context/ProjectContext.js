import { createContext, useContext } from "react";

const ProjectContext = createContext();

const projectsData = [
  {
    title: "Cajicá 360°",
    image: "img/cajica-360.png",
    description: "A virtual tour of Cajicá, allowing users to explore and connect with local tourism service providers.",
    link: "https://360.turismocajica.gov.co/"
    // link: "https://cajica360.vercel.app/"
  },
  {
    title: "SpaceView",
    image: "img/space-view.png",
    description: "Discover the wonders of the universe with SpaceView, your interactive window to the cosmos. Using powerful APIs provided by NASA, you can explore breathtaking images, learn about planets in our solar system, and journey beyond to uncover the mysteries of distant galaxies. Embark on a cosmic adventure and dive into the beauty of space like never before.",
    link: "https://space-view-delta.vercel.app/"
  },
  {
    title: "DevHub",
    image: "img/img-DevHub.png",
    description: "A small space for big minds to find and share knowledge in development. A React-based application where users can upload and organize videos into categories focused on web development.",
    link: "https://dev-hub-vert.vercel.app/"
  },
  {
    title: "Org",
    image: "img/org.png",
    description: "A platform designed to easily organize your teams and collaborators.",
    link: "https://org-six-pied.vercel.app/"
  },
  
];


export const ProjectProvider = ({children}) => {
  return (
    <ProjectContext.Provider value={projectsData}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjects = () => useContext(ProjectContext);
