import React from 'react';
import { render, screen } from '@testing-library/react';
import Loading from './Loading';

describe('Loading component', () => {
  it('renders without crashing', () => {
    const loading = render(<Loading />);
    const element = screen.getByTestId('loading-spinner');
    expect(element).toBeInTheDocument();
    expect(loading).toMatchSnapshot();
  });
});
