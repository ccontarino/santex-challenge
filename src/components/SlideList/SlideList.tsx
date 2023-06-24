import React, { useState } from 'react';
import styled from 'styled-components';
import { ProductVariant } from '../../types/types';

interface SelectComponentProps {
  variants?: ProductVariant[];
  variantSelected?: ProductVariant;
  setVariant?: Function;
}

function SelectComponent({ variants, variantSelected }: SelectComponentProps) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event: any) => {
    setSelectedOption(event.target.value);
  };

  const Select = styled.select`
    border: 1px solid #ccc;
    border-radius: 8px;
    margin-top: 8px;
    font-size: 16px;
    max-width: 100%;
  `;

  const renderVariant = (variantProp: ProductVariant[]) => {
    return variantProp?.map((variant) => {
      return (
        <option key={variant.id} value={variant.id}>
          {variant.name}
        </option>
      );
    });
  };

  return (
    <div>
      <label
        htmlFor="selectOption"
        style={{ display: 'block' }}
      >{`Select a variant`}</label>
      <Select
        id="selectOption"
        value={selectedOption}
        onChange={handleSelectChange}
      >
        <option value="" style={{ display: 'none' }}>
          {variantSelected?.name}
        </option>
        {variants && renderVariant(variants)}
      </Select>
    </div>
  );
}

export default SelectComponent;
