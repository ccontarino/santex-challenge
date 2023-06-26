import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MyContext } from '../../Context/Context';
import CheckoutSideBar from './checkoutSideBar';
import { UPDATE_SLIDE_BAR } from '../../Context/constantsContext';

const mockDispatch = jest.fn();
const mockState = {
  checkoutSideBarIsOpen: true,
  checkoutOrders: [
    {
      order: {
        total: 100,
        totalWithTax: 110,
      },
    },
    {
      order: {
        total: 200,
        totalWithTax: 220,
      },
    },
  ],
};

describe('CheckoutSideBar', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render the component', () => {
    render(
      <MyContext.Provider value={{ dispatch: mockDispatch, state: mockState }}>
        <CheckoutSideBar />
      </MyContext.Provider>
    );

    expect(screen.getByText('Order Checkout')).toBeInTheDocument();
    expect(screen.getByText('SubTotal:')).toBeInTheDocument();
    expect(screen.getByText('Total with Taxes:')).toBeInTheDocument();
  });

  it('should toggle the sidebar when the close button is clicked', () => {
    render(
      <MyContext.Provider value={{ dispatch: mockDispatch, state: mockState }}>
        <CheckoutSideBar />
      </MyContext.Provider>
    );

    const closeButton = screen.getByRole('button');
    userEvent.click(closeButton);

    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(mockDispatch).toHaveBeenCalledWith({
      type: UPDATE_SLIDE_BAR,
      payload: false,
    });
  });

  it('should display the correct total cost', async () => {
    render(
      <MyContext.Provider value={{ dispatch: mockDispatch, state: mockState }}>
        <CheckoutSideBar />
      </MyContext.Provider>
    );

    expect(screen.getByText('$300')).toHaveTextContent('$300');
    expect(screen.getByText('$330')).toHaveTextContent('$330');
  });
});
