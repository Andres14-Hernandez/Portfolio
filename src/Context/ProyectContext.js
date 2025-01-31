import { createContext, useContext } from "react";

const ProyectContext = createContext();

const proyectsData = [
  {
    title: "Proyecto 1",
    image: "https://via.placeholder.com/150",
    description: "Descripción del Proyecto 1."
  },
  {
    title: "Proyecto 2",
    image: "https://via.placeholder.com/150",
    description: "Descripción del Proyecto 2."
  },
  {
    title: "Proyecto 3",
    image: "https://via.placeholder.com/150",
    description: "Descripción del Proyecto 3."
  },
];


export const ProyectProvider = ({ children }) => {
  return (
    <ProyectContext.Provider value={proyectsData}>
      {children}
    </ProyectContext.Provider>
  );
};

export const useProyects = () => useContext(ProyectContext);
