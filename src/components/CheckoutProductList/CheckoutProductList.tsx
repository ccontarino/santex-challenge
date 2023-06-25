import * as React from 'react';

import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import { CheckoutProduct as checkoutProductInterface } from '../../Interfaces/CheckoutProduct.Interface';
import useStateWithStorage from '../../hooks/useStateWithStorage';

interface CheckoutProductListProps {}

const CheckoutProductList = (props: CheckoutProductListProps) => {
  const [checkoutOrders, setCheckoutOrders] = useStateWithStorage<
    checkoutProductInterface[]
  >('checkoutOrders', []);
  return <CheckoutProduct></CheckoutProduct>;
};

export default CheckoutProductList;
