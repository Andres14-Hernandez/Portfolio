import { createContext, useContext } from "react";

const ProjectContext = createContext();

const projectsData = [
  {
    title: "Cajicá 360°",
    image: "img/cajica-360.png",
    description: "A virtual tour of the municipality of Cajicá, where users can learn more about the tourism offered by the local government. By rendering panoramic images with JavaScript, a dynamic experience is created in which users can move freely and explore the various local businesses and initiatives.",
    link: "https://360.turismocajica.gov.co/"
    // link: "https://cajica360.vercel.app/"
  },
  {
    title: "SpaceView",
    image: "img/space-view.png",
    description: "Discover the wonders of the universe with SpaceView, your interactive window to the cosmos. This project uses NASA APIs to access and render images from different databases, along with their corresponding metadata, which flow through various levels of the application. Users can search for topics of interest.",
    link: "https://space-view-delta.vercel.app/"
  },
  {
    title: "DevHub",
    image: "img/img-DevHub.png",
    description: "A small space for big minds to find and share knowledge in development. A React-based application where users can upload and organize videos into categories focused on web development.",
    link: "https://dev-hub-vert.vercel.app/"
  },
  /* {
    title: "Org",
    image: "img/org.png",
    description: "A platform designed to easily organize your teams and collaborators.",
    link: "https://org-six-pied.vercel.app/"
  }, */
  
];


export const ProjectProvider = ({children}) => {
  return (
    <ProjectContext.Provider value={projectsData}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjects = () => useContext(ProjectContext);
