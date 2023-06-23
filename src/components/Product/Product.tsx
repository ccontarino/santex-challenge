import * as React from 'react';
import styled from 'styled-components';

interface ProductComponentProps {
  cardImage?: string;
  cardDescription?: string;
  cardPrice?: number;
}
const Product = ({
  cardImage = 'https://http2.mlstatic.com/D_NQ_NP_2X_757528-MLA40747806690_022020-F.webp',
  cardDescription = 'item description',
  cardPrice = 20,
}: ProductComponentProps) => {
  const Card = styled.div`
    width: 150px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    overflow: hidden;
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

export default Product;
