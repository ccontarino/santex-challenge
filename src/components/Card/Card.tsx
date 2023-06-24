import * as React from 'react';
import styled, { keyframes } from 'styled-components';

interface CardComponentProps {
  cardImage?: string;
  cardDescription?: string;
  cardTitle?: string;
  cardPrice?: number;
  id?: number;
}
const Card = styled.div`
  width: 250px;
  padding: 10px;
  height: 350px;
  max-height: 350px;
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
const CardImage = styled.img`
  width: 100%;
  height: 150px;
  border-radius: 8px;
  max-height: 120px;
  object-fit: cover;
`;
const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const CardDescription = styled.div`
  height: 126px;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
const CardTitle = styled.div`
  font-size: 1em;
  font-weight: bold;
  padding-bottom: 8px;
`;
const CardPrice = styled.div`
  font-size: 18px;
  text-align: right;
  font-weight: bold;
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

const CardComponent = ({
  cardImage = 'https://http2.mlstatic.com/D_NQ_NP_940340-MLA44436035974_122020-O.webp',
  cardDescription = 'item description',
  cardTitle = 'item title',
  cardPrice = 20,
  id,
}: CardComponentProps) => {
  return (
    <Card key={id}>
      <>
        <CardImage src={cardImage} loading="lazy" />
        <HorizontalLine />
        <CardTitle>{cardTitle}</CardTitle>
      </>
      <CardContent>
        <CardDescription>{cardDescription}</CardDescription>
        <PriceContainer>
          <CardPrice>${cardPrice}</CardPrice>
        </PriceContainer>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
