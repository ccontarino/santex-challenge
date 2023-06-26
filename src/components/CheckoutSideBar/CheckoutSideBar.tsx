import React, { useContext, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { MyContext } from '../../Context/Context';
import { UPDATE_SLIDE_BAR } from '../../Context/constantsContext';
import Close from '../Close/Close';
import useStateWithStorage from '../../hooks/useStateWithStorage';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import CheckoutProductList from '../CheckoutProductList/CheckoutProductList';
import { formatPrice } from '../../utils/price';

const openAnimation = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const closeAnimation = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`;

const CheckoutSideBarWrapper = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  border-left: 1px solid #ccc;
  border-radius: 8px 0 0 8px;
  width: 400px;
  padding: 30px 15px;
  height: 100vh;
  overflow-y: auto;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.7);
  background-color: #f2f2f2;
  transform: translateX(100%);
  animation: ${({ isOpen }) => (isOpen ? openAnimation : closeAnimation)} 0.3s
    forwards;
`;

const Total = styled.div`
  display: flex;
  direction: column;
  width: 100%;
  padding: 10px;
  justify-content: space-between;

  font-size: 1.2em;
`;
const CheckoutSideBar = () => {
  const {
    dispatch,
    state: { checkoutSideBarIsOpen, checkoutOrders },
  } = useContext(MyContext);

  const handleToggle = () => {
    dispatch({ type: UPDATE_SLIDE_BAR, payload: !checkoutSideBarIsOpen });
  };

  const totalCost = () => {
    return checkoutOrders.reduce((acc, curr) => {
      return acc + curr.order.total;
    }, 0);
  };
  const totalCostWithTaxes = () => {
    return checkoutOrders.reduce((acc, curr) => {
      return acc + curr.order.totalWithTax;
    }, 0);
  };
  return (
    <CheckoutSideBarWrapper isOpen={checkoutSideBarIsOpen}>
      <Close onClick={handleToggle}></Close>
      <h2>Order Checkout</h2>
      <CheckoutProductList />

      <Total>
        <span>{`SubTotal:`}</span>
        <span>{formatPrice(totalCost())}</span>
      </Total>
      <Total>
        <span>{`Total with Taxes:`}</span>
        <span>{formatPrice(totalCostWithTaxes())}</span>
      </Total>

      {/* <div>{`Total With Taxes:   `}</div>
      <div>${formatPrice(totalCostWithTaxes())}</div> */}
    </CheckoutSideBarWrapper>
  );
};

export default CheckoutSideBar;
