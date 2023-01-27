import { useState, useEffect, useContext, createContext } from "react";

const AppStoreContext = createContext();

export const useAppStore = () => {
  return useContext(AppStoreContext);
};

export const GlobalProvider = ({ children }) => {
  const views = ["Welcome", "About","Skills", "Samples", "Contact"];
  const [pageCounter, setPageCounter] = useState(0);
  const [curr, setCurr] = useState();

  useEffect(() => {
    setCurr(views[pageCounter]);
    console.log("Changing views...");
  }, [pageCounter]);

  const values = {
    curr,
    setPageCounter,
  };

  return (
    <AppStoreContext.Provider value={values}>
      {children}
    </AppStoreContext.Provider>
  );
};
