import React, { createContext, useContext } from 'react';
import { ProjectInterface, PersonalInterface } from '../interfaces';

interface Context {
  projects: ProjectInterface[];
  personal: PersonalInterface;
}


const appContext = createContext<Context | null>(null);

export const useAppContext = () => {
  const context = useContext(appContext);
  
  if (!context) throw new Error('useAppContext was called outside the app context provider');

  return context;
};

interface Provider {
  children: React.ReactNode;
  projects: ProjectInterface[];
  personal: PersonalInterface;

}

export const AppContextProvider = ({ children, projects, personal }: Provider) => {
  return (
    <appContext.Provider value={{ projects, personal }}>
      {children}
    </appContext.Provider>
  );
};

