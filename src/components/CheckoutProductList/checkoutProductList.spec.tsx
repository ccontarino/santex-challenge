import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CheckoutProductList from './CheckoutProductList';
import { MyContext } from '../../Context/Context';

describe('CheckoutProductList', () => {
  const dispatch = jest.fn();
  const products = {
    products: {
      items: [
        {
          id: '1',
          name: 'Product 1',
          description: 'Description 1',
          assets: [{ preview: 'image1.jpg' }],
          variants: [{ id: '1', name: 'Variant 1' }],
        },
        {
          id: '2',
          name: 'Product 2',
          description: 'Description 2',
          assets: [{ preview: 'image2.jpg' }],
          variants: [{ id: '2', name: 'Variant 2' }],
        },
      ],
    },
  };
  const checkoutOrders = [
    { productID: '1', variantID: '1', order: 1 },
    { productID: '2', variantID: '2', order: 2 },
  ];
  const state = { checkoutSideBarIsOpen: true, products, checkoutOrders };
  const contextValue = { dispatch, state };

  it('renders a list of checkout products', () => {
    render(
      <MyContext.Provider value={contextValue}>
        <CheckoutProductList />
      </MyContext.Provider>
    );

    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('Product 2')).toBeInTheDocument();
  });

  it('renders the correct product information', () => {
    render(
      <MyContext.Provider value={contextValue}>
        <CheckoutProductList />
      </MyContext.Provider>
    );

    expect(screen.getByText('Variant 1')).toBeInTheDocument();
    expect(screen.getByText('Variant 2')).toBeInTheDocument();
  });

});
