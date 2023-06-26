import styled from 'styled-components';
import Product from '../Product/Product';
import { useLazyQuery, useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { GET_PRODUCTS } from '../../graphql/queries';
import { Product as ProductData } from '../../Interfaces/Product.Interface';
import Loading from '../Loading/Loading';
import { MyContext } from '../../Context/Context';
import { useContext } from 'react';
import { UPDATE_PRODUCTS } from '../../Context/constantsContext';
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

  const {
    dispatch,
    state: { products },
  } = useContext(MyContext);
  useEffect(() => {
    if (data) {
      dispatch({ type: UPDATE_PRODUCTS, payload: data });
    }
  }, [data, loading, error]);

  return (
    <Container>
      {products ? (
        products?.products?.items.map(
          ({ id, description, name, assets, variants }, index) => (
            <Box>
              <Product
                key={id + index}
                productTitle={name}
                productDescription={description}
                productImage={assets[0]?.preview}
                variants={variants}
                id={id}
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
