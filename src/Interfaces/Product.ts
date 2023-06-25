import { Product as ProductApi } from '../types/types';

export interface Product {
  products: {
    items: ProductApi[];
  };
}
