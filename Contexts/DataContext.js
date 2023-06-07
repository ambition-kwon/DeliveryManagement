import React from 'react';
import {createContext, useState} from 'react';

const DataContext = createContext();

export function DataContextProvider({children}) {
  const [token, setToken] = useState('init');

  return (
    <DataContext.Provider value={{token, setToken}}>
      {children}
    </DataContext.Provider>
  );
}

export default DataContext;
