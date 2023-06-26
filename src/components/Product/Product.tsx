import react, { useContext, useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import SelectComponent from '../VariantList/VariantList';
import { ProductVariant } from '../../types/types';
import { formatPrice } from '../../utils/price';
import { ADD_ITEM_TO_ORDER } from '../../graphql/mutations';
import { useLazyQuery, useMutation } from '@apollo/client';
import { MyContext } from '../../Context/Context';
import { UPDATE_SLIDE_BAR } from '../../Context/constantsContext';
import useStateWithStorage from '../../hooks/useStateWithStorage';
import { GET_ORDER_BY_ID } from '../../graphql/queries';
import { CheckoutProduct } from '../../Interfaces/CheckoutProduct.Interface';
import { deepCopyArray } from '../../utils/object';

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
  id: string;
  variants?: ProductVariant[];
}

const ProductComponent = ({
  productImage,
  productDescription,
  productTitle,
  variants = [],
  id,
}: ProductComponentProps) => {
  const [variantSelected, setVariantSelected] = useState(variants[0]);
  const [addItemToOrder, { data, error }] = useMutation(ADD_ITEM_TO_ORDER);

  const [getOrderByID, { data: orderResponse, orderError, orderLoading }]: any =
    useLazyQuery(GET_ORDER_BY_ID);
  const {
    dispatch,
    // state: { checkoutSideBarIsOpen },
    state: { checkoutOrders },
    setCheckoutOrders,
  } = useContext(MyContext);
  const buyProduct = () => {
    addItemToOrder({
      variables: {
        productVariantId: variantSelected?.id,
        quantity: 1,
      },
    });
  };
  // useEffect(() => {
  //   console.log('orderResponse::', orderResponse, orderError, orderLoading);
  // }, [orderResponse, orderError, orderLoading]);

  useEffect(() => {
    if (error) {
      console.log(error);
    }
    if (data) {
      console.log('addItemToOrder response::', data);
      dispatch({ type: UPDATE_SLIDE_BAR, payload: true });
      const checkoutProduct: CheckoutProduct = {
        productID: id,
        variantID: variantSelected?.id,
        quantity: 1,
        order: data.addItemToOrder,
      };

      setCheckoutOrders([...checkoutOrders, checkoutProduct]);
    }

    // getOrderByID({ variables: { id: data.addItemToOrder.id } });
  }, [error, data]);

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
          <CardPrice onClick={buyProduct}>{` Buy $${
            variantSelected ? formatPrice(variantSelected.price) : ''
          }`}</CardPrice>
        </PriceContainer>
      </ProductContent>
    </ProductContainer>
  );
};

export default ProductComponent;
