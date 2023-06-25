import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import SelectComponent from '../VariantList/VariantList';
import { ProductVariant } from '../../types/types';
import { formatPrice } from '../../utils/price';

const ProductContainer = styled.div`
  width: 250px;
  padding: 10px;
  height: 450px;
  max-height: 400px;
  border: 1px solid #ccc;
  overflow: hidden;
  transition: box-shadow 0.3s;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.7);
  }
  background-color: #fff;
  cursor: pointer;
`;
const ProductImage = styled.img`
  width: 100%;
  height: 150px;
  border-radius: 8px;
  max-height: 120px;
  object-fit: cover;
`;
const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const ProductDescription = styled.div`
  height: 126px;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
const ProductTitle = styled.div`
  font-size: 1em;
  font-weight: bold;
  padding-bottom: 8px;
`;
const CardPrice = styled.button`
  font-size: 18px;
  text-align: right;
  cursor: pointer;
  background-color: #f2f2f2;
  border-radius: 8px;
  &:hover {
    font-weight: bold;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.7);
  }
`;
const HorizontalLine = styled.div`
  border-bottom: 1px solid #ccc;
  margin-bottom: 10px;
`;
const PriceContainer = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: 10px;
  justify-content: flex-end;
`;
interface ProductComponentProps {
  productImage?: string;
  productDescription?: string;
  productTitle?: string;
  id?: number;
  variants?: ProductVariant[];
}

const ProductComponent = ({
  productImage,
  productDescription,
  productTitle,
  variants = [],
  id,
}: ProductComponentProps) => {
  const [variantSelected, setVariantSelected] = React.useState(variants[0]);

  return (
    <ProductContainer>
      <div style={{ marginBottom: 10 }}>
        <ProductImage src={productImage} loading="lazy" />
        <HorizontalLine />
        <ProductTitle>{productTitle}</ProductTitle>
        <SelectComponent
          variantSelected={variantSelected}
          setVariant={setVariantSelected}
          variants={variants}
        />
      </div>
      <ProductContent>
        <ProductDescription>{productDescription}</ProductDescription>
        <PriceContainer>
          <CardPrice>{` Buy $${
            variantSelected ? formatPrice(variantSelected.price) : ''
          }`}</CardPrice>
        </PriceContainer>
      </ProductContent>
    </ProductContainer>
  );
};

export default ProductComponent;
