import React from 'react';
import { render, screen } from '@testing-library/react';
import CheckoutProduct from './checkoutProduct';
import { formatPrice } from '../../utils/price';

describe('CheckoutProduct', () => {
  it('renders product image, name, variant name, and price', () => {
    const productImage = 'image.jpg';
    const name = 'Product Name';
    const variant = { name: 'Variant Name', price: 9.99, id: '123' };
    render(
      <CheckoutProduct
        productImage={productImage}
        name={name}
        variant={variant}
      />
    );

    expect(screen.getByText(name)).toBeInTheDocument();
    expect(screen.getByText(variant.name)).toBeInTheDocument();
    expect(
      screen.getByText(`$${formatPrice(variant?.price)}`)
    ).toBeInTheDocument();
  });
});
