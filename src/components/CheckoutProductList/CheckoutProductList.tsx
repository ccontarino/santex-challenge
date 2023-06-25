import react, { useContext } from 'react';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import { CheckoutProduct as checkoutProductInterface } from '../../Interfaces/CheckoutProduct.Interface';
import useStateWithStorage from '../../hooks/useStateWithStorage';
import styled from 'styled-components';
import { MyContext } from '../../Context/Context';

interface CheckoutProductListProps {}

const CheckoutProductList = (props: CheckoutProductListProps) => {
  const [checkoutOrders, setCheckoutOrders] = useStateWithStorage<
    checkoutProductInterface[]
  >('checkoutOrders', []);
  const {
    dispatch,
    state: { checkoutSideBarIsOpen, products },
  } = useContext(MyContext);

  const renderProducts = () => {
    return checkoutOrders.map((checkoutProduct: any, index: number) => {
      return <CheckoutProduct index={index} key={checkoutProduct.productID} />;
    });
  };

  const ContainerProducts = styled.div`
    height: 80%;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.7);
    overflow-y: auto;
  `;
  return <ContainerProducts>{renderProducts()}</ContainerProducts>;
};

export default CheckoutProductList;
