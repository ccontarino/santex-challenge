import React from 'react';
import styled from 'styled-components';

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 30px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const CloseIcon = styled.span`
  display: block;
  position: relative;
  width: 100%;
  height: 2px;
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #000;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`;

interface CloseProps {
  onClick: () => void;
}
const Close = ({ onClick }: CloseProps) => (
  <CloseButton onClick={onClick}>
    <CloseIcon />
  </CloseButton>
);

export default Close;
