import { Order, Product, ProductVariant } from '../types/types';

export interface CheckoutProduct {
  productID: string;
  variantID: string;
  quantity: number;
  order: Order;
}
export interface CheckoutProductWithVariants {
  order?: Order;
  description?: string;
  name?: string;
  assets?: Array<{ source: string; preview: string }>;
  variant: ProductVariant | undefined;
  id?: string;
}
