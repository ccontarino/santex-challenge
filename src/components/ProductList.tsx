import styled from 'styled-components';
import Product from './Card/Card';
import { useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { GET_PRODUCTS } from '../services/ProductQuery';
import { Product as ProductData } from '../Interface/Product';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 12px;
  padding: 12px;
`;

export function ProductList() {
  const { loading, error, data } = useQuery<ProductData>(GET_PRODUCTS);

  useEffect(() => {
    if (data) {
      console.log('data', data);
    }
  }, [data, loading, error]);

  return (
    <Container>
      {data &&
        data.products.items.map(({ id, description, name, assets }) => (
          <Product
            cardDescription={description}
            cardImage={assets[0]?.source}
          />
        ))}
    </Container>
  );
}
