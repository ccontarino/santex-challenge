import React from 'react';
import styled from 'styled-components';

const CartWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const CartIcon = styled.i`
  font-size: 24px;
`;

const Notification = styled.span`
  position: absolute;
  top: -5px;
  right: -12px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: red;
  color: white;
  font-size: 14px;
  display: flex;
  font-weight: bold;
  align-items: center;
  justify-content: center;
`;
interface CartProps {
  numItems: number;
}

const CartNumber = ({ numItems }: CartProps) => {
  return (
    <CartWrapper>
      <CartIcon className="fas fa-shopping-cart"></CartIcon>
      {numItems > 0 && <Notification>{numItems}</Notification>}
    </CartWrapper>
  );
};

export default CartNumber;
