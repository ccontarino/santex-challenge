import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Close from './Close';

describe('Close', () => {
  it('should render the component', () => {
    const { getByRole } = render(<Close onClick={() => {}} />);
    const closeButton = getByRole('button');
    expect(closeButton).toBeInTheDocument();
  });

  it('should call the onClick function when clicked', () => {
    const onClick = jest.fn();
    const { getByRole } = render(<Close onClick={onClick} />);
    const closeButton = getByRole('button');
    fireEvent.click(closeButton);
    expect(onClick).toHaveBeenCalled();
  });

});