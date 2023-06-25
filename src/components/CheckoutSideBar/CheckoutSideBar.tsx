import React, { useContext, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { MyContext } from '../../Context/Context';
import { UPDATE_SLIDE_BAR } from '../../Context/constantsContext';
import Close from '../Close/Close';
import useStateWithStorage from '../../hooks/useStateWithStorage';

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
  width: 300px;
  padding: 30px 20px;
  height: 100vh;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.7);
  background-color: #f2f2f2;
  transform: translateX(100%);
  animation: ${({ isOpen }) => (isOpen ? openAnimation : closeAnimation)} 0.3s
    forwards;
`;

const CheckoutSideBar = () => {
  const {
    dispatch,
    state: { checkoutSideBarIsOpen },
  } = useContext(MyContext);

  // const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    dispatch({ type: UPDATE_SLIDE_BAR, payload: !checkoutSideBarIsOpen });
  };

  return (
    <CheckoutSideBarWrapper isOpen={checkoutSideBarIsOpen}>
      <Close onClick={handleToggle}></Close>
      {/* <ToggleButton onClick={handleToggle}>Toggle</ToggleButton> */}
      <h2>Order Checkout</h2>
    </CheckoutSideBarWrapper>
  );
};

export default CheckoutSideBar;
