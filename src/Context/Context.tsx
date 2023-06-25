import React, { useState, createContext, ReactNode } from 'react';
import { Product } from '../Interfaces/Product';
interface MyContextProviderProps {
  children: ReactNode;
}
const MyContext = createContext({});

export const MyContextProvider = ({ children }: MyContextProviderProps) => {
  const [products, setProducts] = useState<Product | null>(null);

  const updateProducts = (newProducts: Product) => {
    setProducts(newProducts);
  };

  const contextValues = {
    products,
  };

  return (
    <MyContext.Provider value={contextValues}>{children}</MyContext.Provider>
  );
};

export default MyContext;
