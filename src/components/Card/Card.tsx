import * as React from 'react';
import styled from 'styled-components';

interface CardComponentProps {
  cardImage?: string;
  cardDescription?: string;
  cardPrice?: number;
}
const Card = ({
  cardImage = 'https://http2.mlstatic.com/D_NQ_NP_2X_757528-MLA40747806690_022020-F.webp',
  cardDescription = 'item description',
  cardPrice = 20,
}: CardComponentProps) => {
  const Card = styled.div`
    width: 150px;
    border: 1px solid #ccc;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    &:hover {
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
      transform: translateY(-5px);
    }
    cursor: pointer;
  `;
  const CardImage = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
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

  return (
    <Card>
      <CardImage src={cardImage} />
      <CardContent>
        <CardDescription>{cardDescription}</CardDescription>
        <CardPrice>${cardPrice}</CardPrice>
      </CardContent>
    </Card>
  );
};

export default Card;
