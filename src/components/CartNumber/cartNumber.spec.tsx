import React from 'react';
import { render, screen } from '@testing-library/react';
import CartNumber from './CartNumber';

describe('CartNumber', () => {
  it('renders without crashing', () => {
    const cartNumber = render(<CartNumber numItems={0} />);
    expect(cartNumber).toMatchSnapshot();
  });

  it('displays the correct number of items', () => {
    render(<CartNumber numItems={3} />);
    const notification = screen.getByText('3');
    expect(notification).toBeInTheDocument();
  });

  it('does not display a notification when there are no items', () => {
    render(<CartNumber numItems={0} />);
    const notification = screen.queryByText(/./);
    expect(notification).not.toBeInTheDocument();
  });

  it('displays a notification when there are items', () => {
    render(<CartNumber numItems={1} />);
    const notification = screen.getByText('1');
    expect(notification).toBeInTheDocument();
  });
});
