import React, { useState, createContext, ReactNode } from "react";
import { AppContextType } from "../types/AppContext";

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state] = useState<string>("example");

  return <AppContext.Provider value={{ state }}>{children}</AppContext.Provider>;
};

export default AppContext;
