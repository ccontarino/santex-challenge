import React from 'react';
import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { MyContext } from '../../Context/Context';
import { ProductList } from './ProductList';
import { GET_PRODUCTS } from '../../graphql/queries';

const mocks = [
  {
    request: {
      query: GET_PRODUCTS,
    },
    result: {
      data: {
        products: {
          items: [
            {
              id: '1',
              name: 'Product 1',
              description: 'Product 1 description',
              assets: [{ preview: 'image1.jpg' }],
              variants: [{ price: 10 }],
            },
            {
              id: '2',
              name: 'Product 2',
              description: 'Product 2 description',
              assets: [{ preview: 'image2.jpg' }],
              variants: [{ price: 20 }],
            },
          ],
        },
      },
    },
  },
];

describe('ProductList', () => {
  it('should render loading spinner when data is not yet loaded', () => {
    const producList = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <MyContext.Provider value={{ state: { products: null } }}>
          <ProductList />
        </MyContext.Provider>
      </MockedProvider>
    );
    expect(producList).toMatchSnapshot();
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
  });

  it('should render list of products when data is loaded', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <MyContext.Provider
          value={{ state: { products: mocks[0].result.data } }}
        >
          <ProductList />
        </MyContext.Provider>
      </MockedProvider>
    );
    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('Product 2')).toBeInTheDocument();
  });
});
