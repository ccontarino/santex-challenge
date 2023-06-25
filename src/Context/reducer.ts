import { UPDATE_PRODUCTS } from './constantsContext';

export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case UPDATE_PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};
