import { Header } from './components/Header';
import { ProductList } from './components/ProductList';
import React from 'react';
function App() {
  return (
    <>
      <Header></Header>
      <div>
        <ProductList></ProductList>
      </div>
    </>
  );
}

export default App;
