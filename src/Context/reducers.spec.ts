import { reducer } from './reducer';
import { UPDATE_PRODUCTS, UPDATE_SLIDE_BAR } from './constantsContext';

describe('reducer', () => {
  it('should return the initial state', () => {
    const initialState = { products: [], checkoutSideBarIsOpen: false };
    const action = { type: 'unknown' };
    expect(reducer(initialState, action)).toEqual(initialState);
  });

  it('should handle UPDATE_PRODUCTS', () => {
    const initialState = { products: [], checkoutSideBarIsOpen: false };
    const products = [{ id: 1, name: 'Product 1' }, { id: 2, name: 'Product 2' }];
    const action = { type: UPDATE_PRODUCTS, payload: products };
    const expectedState = { products, checkoutSideBarIsOpen: false };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle UPDATE_SLIDE_BAR', () => {
    const initialState = { products: [], checkoutSideBarIsOpen: false };
    const checkoutSideBarIsOpen = true;
    const action = { type: UPDATE_SLIDE_BAR, payload: checkoutSideBarIsOpen };
    const expectedState = { products: [], checkoutSideBarIsOpen };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });
});