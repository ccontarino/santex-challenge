import React, { ReactNode, createContext, useReducer } from 'react';
import { Product } from '../Interfaces/Product.Interface';
import { reducer } from './reducer';
import { CheckoutProduct as checkoutProductInterface } from '../Interfaces/CheckoutProduct.Interface';
import useStateWithStorage from '../hooks/useStateWithStorage';
const initialState = {
  products: null as Product | null,
  checkoutSideBarIsOpen: false as boolean,
  checkoutOrders: [] as checkoutProductInterface[],
};

interface MyContextProviderProps {
  children: ReactNode;
}

const MyContext = createContext({
  state: initialState,
  dispatch: (action: any) => {},
  setCheckoutOrders: (value: checkoutProductInterface[]) => {},
});

const MyContextProvider = ({ children }: MyContextProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [checkoutOrders, setCheckoutOrders] = useStateWithStorage<
    checkoutProductInterface[]
  >('checkoutOrders', []);

  return (
    <MyContext.Provider
      value={{
        state: { ...state, checkoutOrders: checkoutOrders },
        dispatch,
        setCheckoutOrders,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
