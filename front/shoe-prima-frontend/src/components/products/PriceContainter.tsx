import React, { useState } from 'react';
import styled from 'styled-components';

interface CheckedItems {
  item1: boolean;
  item2: boolean;
  item3: boolean;
  item4: boolean;
}

const PriceContainer: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState<CheckedItems>({
    item1: false,
    item2: false,
    item3: false,
    item4: false,
  });

  const handleIndividualChange = (item: keyof CheckedItems) => {
    const newCheckedItems: CheckedItems = {
      ...checkedItems,
      [item]: !checkedItems[item],
    };

    setCheckedItems(newCheckedItems);
  };

  return (
    <Container>
      <Label>
        <StyledInput
          type="checkbox"
          checked={checkedItems.item1}
          onChange={() => handleIndividualChange('item1')}
        />
        0 - 50,000원
      </Label>
      <Label>
        <StyledInput
          type="checkbox"
          checked={checkedItems.item2}
          onChange={() => handleIndividualChange('item2')}
        />
        50,000 - 100,000원
      </Label>
      <Label>
        <StyledInput
          type="checkbox"
          checked={checkedItems.item3}
          onChange={() => handleIndividualChange('item3')}
        />
        100,000 - 150,000원
      </Label>
      <Label>
        <StyledInput
          type="checkbox"
          checked={checkedItems.item4}
          onChange={() => handleIndividualChange('item4')}
        />
        200,000원 +
      </Label>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 12px;
  align-self: stretch;

  color: var(--gray-900, var(--color---gray900, #373737));
  font-feature-settings: 'calt' off;

  /* label/regular */
  font-family: Pretendard;
  font-size: var(--font-size---label-font-size, 15px);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.15px;
`;

const StyledInput = styled.input`
  appearance: none;
  display: flex;
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;

  border: 1px solid var(--color---lightgray300, #e5e5e5);
  background: var(--color---lightgray100, #f9f9f9);

  &:checked {
    background: var(--color---black900, #222);
  }

  &:checked::before {
    content: '✔'; /* 임시 체크 표시 */
    color: white;
    font-size: 16px;
  }
`;

export default PriceContainer;
