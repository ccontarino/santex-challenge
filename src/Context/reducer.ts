import { UPDATE_PRODUCTS, UPDATE_SLIDE_BAR } from './constantsContext';

export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case UPDATE_PRODUCTS:
      return { ...state, products: action.payload };
    case UPDATE_SLIDE_BAR:
      return { ...state, checkoutSideBarIsOpen: action.payload };
    default:
      return state;
  }
};
