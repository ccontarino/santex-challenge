import * as React from 'react';
import styled from 'styled-components';
import { Order, ProductVariant } from '../../types/types';
import { formatPrice } from '../../utils/price';

interface componentNameProps {
  index?: number;
  name?: string;
  productImage?: string | undefined;
  productDescription?: string;
  productTitle?: string;
  id: string | undefined;
  variant?: ProductVariant;
  order?: Order;
}

const CheckoutProductContainer = styled.div`
  background-color: #fff;
  display: flex;
  margin: 0 0 10px 0;
  width: 100%;
  height: 120px;
  border-radius: 8px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
const ProductImage = styled.img`
  height: 100%;
  padding: 10px;
  flex: 1;
  border-radius: 8px;
  object-fit: cover;
`;
const VerticalLine = styled.div`
  border-left: 1px solid #ccc;
  height: 100%;
  width: 3px;
`;
const TitleContainer = styled.div`
  padding: 8px;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`;

const CheckoutProduct = ({
  productImage,
  name,
  variant,
  order,
}: componentNameProps) => {
  console.log('variant :: ', variant);
  console.log('variant :: ', variant);
  return (
    <CheckoutProductContainer>
      <ProductImage src={productImage} loading="lazy" />
      <VerticalLine />
      <TitleContainer>
        <div>{name}</div>
        <span>
          <div>Variant:{variant?.name}</div>
        </span>
        <div>Price:{formatPrice(variant?.price)}</div>
      </TitleContainer>
    </CheckoutProductContainer>
  );
};

export default CheckoutProduct;
