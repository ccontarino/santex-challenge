import React from 'react';
import { render } from '@testing-library/react';
import { MyContext, MyContextProvider } from './Context';

describe('MyContextProvider', () => {
  it('renders without crashing', () => {
    render(
      <MyContextProvider>
        <div>Test</div>
      </MyContextProvider>
    );
  });

  it('passes the correct value to the context', () => {
    const { container } = render(
      <MyContextProvider>
        <MyContext.Consumer>
          {(value) => (
            <div data-testid="context-value">{JSON.stringify(value)}</div>
          )}
        </MyContext.Consumer>
      </MyContextProvider>
    );

    const contextValue = JSON.parse(
      container.querySelector('[data-testid="context-value"]').textContent
    );

    expect(contextValue.state.products).toBeNull();
    expect(contextValue.state.checkoutSideBarIsOpen).toBe(false);
    expect(contextValue.state.checkoutOrders).toEqual([]);
  });
});
