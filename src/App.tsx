import { MyContextProvider } from './Context/Context';
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
      </MyContextProvider>
    </>
  );
}

export default App;
