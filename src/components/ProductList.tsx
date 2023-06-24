import styled from 'styled-components';
import Product from './Card/Card';

const Container = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
grid-gap: 12px;
padding: 12px;
`;

export function ProductList() {
  return (
    <Container>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>
    </Container>
  );
}
