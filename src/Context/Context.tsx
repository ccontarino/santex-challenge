import React, { ReactNode, createContext, useReducer } from 'react';
import { Product } from '../Interfaces/Product';
import { reducer } from './reducer';

const initialState = {
  products: null as Product | null,
  checkoutSideBarIsOpen: false as boolean,
};

interface MyContextProviderProps {
  children: ReactNode;
}

const MyContext = createContext({
  state: initialState,
  dispatch: (action: any) => {},
});

const MyContextProvider = ({ children }: MyContextProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MyContext.Provider value={{ state, dispatch }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
