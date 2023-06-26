import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import ProductComponent from './Product';
import { ProductVariant } from '../../types/types';
import { ADD_ITEM_TO_ORDER } from '../../graphql/mutations';

const mockVariants: ProductVariant[] = [
  {
    id: 'Variant 1',
    name: 'Variant 1',
    price: 100,
  },
  {
    id: 'Variant 2',
    name: 'Variant 2',
    price: 200,
  },
];

describe('ProductComponent', () => {
  it('renders product title, image, description, variant selector and price', () => {
    render(
      <MockedProvider>
        <ProductComponent
          id="1"
          productTitle="Product Title"
          productImage="https://example.com/image.jpg"
          productDescription="Product Description"
          variants={mockVariants}
        />
      </MockedProvider>
    );

    expect(screen.getByText('Product Title')).toBeInTheDocument();

    expect(screen.getByText('Product Description')).toBeInTheDocument();
    expect(screen.getByText('Variant 2')).toBeInTheDocument();
    expect(screen.getByText('Buy $100')).toBeInTheDocument();
  });

  it('selects a variant when clicked', () => {
    render(
      <MockedProvider>
        <ProductComponent
          id="1"
          productTitle="Product Title"
          productImage="https://example.com/image.jpg"
          productDescription="Product Description"
          variants={mockVariants}
        />
      </MockedProvider>
    );

    fireEvent.click(screen.getByText('Variant 2'));

    waitFor(
      () => {
        expect(screen.getByText('Buy $200')).toBeInTheDocument();
      },
      { timeout: 1000 }
    );
  });
});
