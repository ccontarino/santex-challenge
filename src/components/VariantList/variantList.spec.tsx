import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SelectComponent from './VariantList';

describe('SelectComponent', () => {
  const variants = [
    { id: '1', name: 'Variant 1' },
    { id: '2', name: 'Variant 2' },
    { id: '3', name: 'Variant 3' },
  ];
  const variantSelected = { id: '1', name: 'Variant 1' };
  const setVariant = jest.fn();

  it('should render the select component', () => {
    const { getByLabelText } = render(
      <SelectComponent
        variants={variants}
        variantSelected={variantSelected}
        setVariant={setVariant}
      />
    );
    const selectElement = getByLabelText('Select a variant');
    expect(selectElement).toBeInTheDocument();
  });

  it('should render the correct number of options', () => {
    const { getAllByRole } = render(
      <SelectComponent
        variants={variants}
        variantSelected={variantSelected}
        setVariant={setVariant}
      />
    );
    const optionElements = getAllByRole('option');
    expect(optionElements.length).toBe(variants.length);
  });

  it('should call setVariant when an option is selected', () => {
    const { getByLabelText } = render(
      <SelectComponent
        variants={variants}
        variantSelected={variantSelected}
        setVariant={setVariant}
      />
    );
    const selectElement = getByLabelText('Select a variant');
    fireEvent.change(selectElement, { target: { value: '2' } });
    expect(setVariant).toHaveBeenCalledWith(variants[1]);
  });
});