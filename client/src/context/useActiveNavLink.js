import { createContext, useContext, useState } from 'react';

const ActiveNavLinkContext = createContext();

export const useActiveLink = () => useContext(ActiveNavLinkContext);

export const ActiveNavLinkProvider = ({ children }) => {
  const [activeLink, setActiveLink] = useState('home');

  return (
    <ActiveNavLinkContext.Provider value={{ activeLink, setActiveLink }}>
      {children}
    </ActiveNavLinkContext.Provider>
  );
}