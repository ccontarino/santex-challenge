import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Input } from './Input';

describe('Input', () => {
  it('renders correctly', () => {
    const { getByRole } = render(<Input />);
    const input = getByRole('textbox');
    expect(input).toBeInTheDocument();
    expect(input).toHaveStyle('border: 1px solid #ccc');
    expect(input).toHaveStyle('border-radius: 5px');
    expect(input).toHaveStyle('flex: 3');
    expect(input).toHaveStyle('margin-left: 15px');
    expect(input).toHaveStyle('font-size: 1em');
  });

  it('calls onChange when input value changes', () => {
    const onChange = jest.fn();
    const { getByRole } = render(<Input onChange={onChange} />);
    const input = getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('disables input when disabled prop is true', () => {
    const { getByRole } = render(<Input disabled />);
    const input = getByRole('textbox');
    expect(input).toBeDisabled();
  });
});