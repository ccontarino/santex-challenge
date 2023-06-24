import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
  query {
    products {
      totalItems
      items {
        id
        name
        description
        assets{
          source
          preview
        }
      }
    }
  }
`;
