import { useContext, createContext, useState } from "react";

const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(!open);
  }

  return (
    <GlobalContext.Provider value={{ open, setOpen }}>
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobal = () => {
  return useContext(GlobalContext);
};

export { GlobalContextProvider, useGlobal };
