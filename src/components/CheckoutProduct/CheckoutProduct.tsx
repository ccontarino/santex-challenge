import * as React from 'react';
import styled from 'styled-components';

interface componentNameProps {
  index?: number;
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
  width: 50%;
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
  flex-direction: column;
  justify-content: space-between;
`;

const CheckoutProduct = ({ index }: componentNameProps) => {
  return (
    <CheckoutProductContainer>
      <ProductImage loading="lazy" />
      <VerticalLine />
      <TitleContainer>
        <div>title:{index}</div>
        <div>Variant:</div>
        {/* <div>Quantity</div> */}
        <div>Price:</div>
      </TitleContainer>
    </CheckoutProductContainer>
  );
};

export default CheckoutProduct;
