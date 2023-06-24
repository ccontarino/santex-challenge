import * as React from 'react';
import styled, { keyframes } from 'styled-components';

interface CardComponentProps {
  cardImage?: string;
  cardDescription?: string;
  cardPrice?: number;
}
const Card = styled.div`
  width: 150px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow: hidden;
  transition: box-shadow 0.3s;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.7);
  }
  cursor: pointer;
`;
const CardImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: contain;
`;
const CardContent = styled.div`
  padding: 16px;
`;
const CardDescription = styled.div`
  font-size: 1em;
  margin-bottom: 8px;
`;
const CardPrice = styled.div`
  font-size: 18px;
  font-weight: bold;
`;
const HorizontalLine = styled.div`
  border-bottom: 1px solid #ccc;
`;

const CardComponent = ({
  cardImage = 'https://http2.mlstatic.com/D_NQ_NP_940340-MLA44436035974_122020-O.webp',
  cardDescription = 'item description',
  cardPrice = 20,
}: CardComponentProps) => {
  return (
    <Card>
      <CardImage src={cardImage} />
      <HorizontalLine />
      <CardContent>
        <CardDescription>{cardDescription}</CardDescription>
        <CardPrice>${cardPrice}</CardPrice>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
