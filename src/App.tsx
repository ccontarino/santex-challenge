import { MyContextProvider } from './Context/Context';
import CheckoutSideBar from './components/CheckoutSideBar/CheckoutSideBar';
import { Header } from './components/Header/Header';
import { ProductList } from './components/ProductList/ProductList';
import React from 'react';
function App() {
  return (
    <>
      <MyContextProvider>
        <Header />
        <div>
          <ProductList />
        </div>
        <CheckoutSideBar></CheckoutSideBar>
      </MyContextProvider>
    </>
  );
}

export default App;
