import { Order } from '../types/types';

export interface CheckoutProduct {
  productID: string;
  variantID: string;
  quantity: number;
  orderID: Order;
}
