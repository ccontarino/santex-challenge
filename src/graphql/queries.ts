import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
  query {
    products {
      totalItems
      items {
        id
        name
        description
        variants {
          id
          price
          productId
          name
          assets {
            preview
            source
          }
        }
        assets {
          source
          preview
        }
      }
    }
  }
`;

export const GET_ORDER_BY_ID = gql`
  query getOrder($id: ID!) {
    order(id: $id) {
      id
      total
      subTotal
      totalWithTax
    }
  }
`;
