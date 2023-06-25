import { Header } from './components/Header/Header';
import { ProductList } from './components/ProductList/ProductList';
import React from 'react';
function App() {
  return (
    <>
      <Header />
      <div>
        <ProductList />
      </div>
    </>
  );
}

export default App;
