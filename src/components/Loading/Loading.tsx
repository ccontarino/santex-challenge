// Loading.js
import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
0% { transform: rotate(0deg); }
100% { transform: rotate(360deg); }
`;

const LoadingSpinner = styled.div`
  border: 16px solid #f3f3f3; /* color del borde */
  border-top: 16px solid #3498db; /* color del borde superior */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: ${spin} 2s linear infinite; /* animación */
`;
const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default function Loading() {
  return (
    <LoadingSpinner>
      <LoadingContainer></LoadingContainer>
    </LoadingSpinner>
  );
}

// export default Loading;