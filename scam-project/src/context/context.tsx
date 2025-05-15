import { createContext, useContext } from 'react';

export const IsAdminContext = createContext(null);

export function ContextProvider({ children }) {
    return (
      <IsAdminContext.Provider value={{ isAdmin: true }}>
        {children}
      </IsAdminContext.Provider>
    )
  }