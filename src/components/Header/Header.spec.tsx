import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Header } from './Header';
import { MyContext } from '../../Context/Context';
import { UPDATE_SLIDE_BAR } from '../../Context/constantsContext';

describe('Header', () => {
  it('should render the logo', () => {
    const { getByAltText, ...headerComponent } = render(
      <MyContext.Provider value={{ state: {}, dispatch: jest.fn() }}>
        <Header />
      </MyContext.Provider>
    );
    expect(headerComponent).toMatchSnapshot();
    const logo = getByAltText('logo');
    expect(logo).toBeInTheDocument();
  });

  it('should render the cart icon', () => {
    const { getByAltText } = render(
      <MyContext.Provider value={{ state: {}, dispatch: jest.fn() }}>
        <Header />
      </MyContext.Provider>
    );
    const cartIcon = getByAltText('cart');
    expect(cartIcon).toBeInTheDocument();
  });

  it('should open the checkout sidebar when the cart icon is clicked', () => {
    const dispatch = jest.fn();
    const { getByAltText } = render(
      <MyContext.Provider
        value={{ state: { checkoutSideBarIsOpen: false }, dispatch }}
      >
        <Header />
      </MyContext.Provider>
    );
    const cartIcon = getByAltText('cart');
    fireEvent.click(cartIcon);
    expect(dispatch).toHaveBeenCalledWith({
      type: UPDATE_SLIDE_BAR,
      payload: true,
    });
  });
});
