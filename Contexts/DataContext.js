import React from 'react';
import {createContext, useState} from 'react';

const DataContext = createContext();

export function DataContextProvider({children}) {
  const [token, setToken] = useState('init');
  const [Resident, setResident] = useState({
    name: '',
    address: '',
    birth: '',
    zipcode: '',
  });
  const [Deliverer, setDeliverer] = useState({
    name: '',
    id: '',
    company: '',
  });
  const [Admin, setAdmin] = useState({
    id: '',
    password: '',
  });
  const [selectedItem, setSelectedItem] = useState();

  return (
    <DataContext.Provider
      value={{
        token,
        setToken,
        Resident,
        setResident,
        Deliverer,
        setDeliverer,
        Admin,
        setAdmin,
        selectedItem,
        setSelectedItem,
      }}>
      {children}
    </DataContext.Provider>
  );
}

export default DataContext;
