import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
  query {
    products{
      totalItems
      items{
        id
        name
        description
        variants{
          id
          price
          productId
          name
          assets{
            preview
            source
          }
        }
        assets{
          source
          preview
        }
      }
    }
  }
`;
