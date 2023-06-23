import * as React from 'react';
import Card from '../Card/Card';

interface ProductProps {}

const Product = (props: ProductProps) => {
  return <Card {...props}></Card>;
};

export default Product;
