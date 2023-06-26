import react, { useContext, useEffect } from 'react';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import { CheckoutProduct as checkoutProductInterface } from '../../Interfaces/CheckoutProduct.Interface';
import useStateWithStorage from '../../hooks/useStateWithStorage';
import styled from 'styled-components';
import { MyContext } from '../../Context/Context';

interface CheckoutProductListProps {}

const CheckoutProductList = (props: CheckoutProductListProps) => {
  // const [checkoutOrders, setCheckoutOrders] = useStateWithStorage<
  //   checkoutProductInterface[]
  // >('checkoutOrders', []);
  const {
    dispatch,
    state: { checkoutSideBarIsOpen, products, checkoutOrders },
  } = useContext(MyContext);

  const renderProducts = (checkoutOrdersProp: any) => {
    return checkoutOrdersProp.map((checkoutProduct: any, index: number) => {
      return <CheckoutProduct index={index} key={checkoutProduct.productID} />;
    });
  };

  const findProduct = (id: string) => {
    return products?.products?.items.find((product) => product.id === id);
  };

  const ContainerProducts = styled.div`
    height: 80%;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.7);
    overflow-y: auto;
  `;
  useEffect(() => {
    console.log('checkoutOrders::', checkoutOrders.length);
  }, [checkoutOrders]);
  return (
    <ContainerProducts>{renderProducts(checkoutOrders)}</ContainerProducts>
  );
};

export default CheckoutProductList;
