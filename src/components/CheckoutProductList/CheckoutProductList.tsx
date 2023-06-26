import react, { useContext, useEffect } from 'react';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import {
  CheckoutProductWithVariants,
  CheckoutProduct as checkoutProductInterface,
} from '../../Interfaces/CheckoutProduct.Interface';
import useStateWithStorage from '../../hooks/useStateWithStorage';
import styled from 'styled-components';
import { MyContext } from '../../Context/Context';
import { Product } from '../../types/types';

const ContainerProducts = styled.div`
  height: 80%;
  // box-shadow: 0 10px 20px rgba(0, 0, 0, 0.7);
  overflow-y: auto;
`;
interface CheckoutProductListProps {}

const CheckoutProductList = (props: CheckoutProductListProps) => {
  const {
    dispatch,
    state: { checkoutSideBarIsOpen, products, checkoutOrders },
  } = useContext(MyContext);

  const renderProducts = (checkoutOrdersProp: any) => {
    if (checkoutOrdersProp.length > 0) {
      let listProducts = checkoutOrdersProp.map((checkoutProduct: any) => {
        const product: Product | undefined = findProduct(
          checkoutProduct.productID
        );
        const variant = product?.variants?.find((variant) => {
          return variant.id === checkoutProduct.variantID;
        });
        const checkoutProductWithVariants: CheckoutProductWithVariants = {
          ...product,
          variant,
        };
        return checkoutProductWithVariants;
      });
      console.log(
        'listProducts',
        listProducts
        // listProducts.flatMap((product: any) => product)
      );
      return listProducts.map(
        (
          {
            id,
            assets,
            description,
            order,
            variant,
            name,
          }: CheckoutProductWithVariants,
          index: number
        ) => {
          return (
            <CheckoutProduct
              productDescription={description}
              index={index}
              id={id}
              name={name}
              productImage={assets ? assets[0]?.preview : undefined}
              key={id}
              variant={variant}
              order={order}
            />
          );
        }
      );
    }

    // listProducts = listProducts.flatMap((product) => product);

    // return checkoutOrdersProp.map((checkoutProduct: any, index: number) => {
    //   return <CheckoutProduct index={index} key={checkoutProduct.productID} />;
    // });
  };

  const findProduct = (id: string) => {
    return products?.products?.items.find((product) => product.id === id);
  };

  useEffect(() => {
    console.log('checkoutOrders ::', checkoutOrders);
  }, [checkoutOrders]);

  return (
    <ContainerProducts>{renderProducts(checkoutOrders)}</ContainerProducts>
  );
};

export default CheckoutProductList;
