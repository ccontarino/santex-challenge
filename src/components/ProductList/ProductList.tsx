import styled from 'styled-components';
import Product from '../Product/Product';
import { useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { GET_PRODUCTS } from '../../graphql/queries';
import { Product as ProductData } from '../../Interface/Product';
import Loading from '../Loading/Loading';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 15px;
  height: 100vh;
`;
const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
      {data ? (
        data?.products?.items.map(
          ({ id, description, name, assets, variants }) => (
            <Box>
              <Product
                key={id}
                productTitle={name}
                productDescription={description}
                productImage={assets[0]?.source}
                variants={variants}
              />
            </Box>
          )
        )
      ) : (
        <Box>
          <Loading />
        </Box>
      )}
    </Container>
  );
}
