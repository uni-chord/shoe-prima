import React, { useState } from 'react';
import styled from 'styled-components';

interface CheckedItems {
  selectAll: boolean;
  item1: boolean;
  item2: boolean;
  item3: boolean;
  item4: boolean;
  item5: boolean;
  item6: boolean;
}

const CategoryContainer: () => JSX.Element = () => {
  const [checkedItems, setCheckedItems] = useState<CheckedItems>({
    selectAll: false,
    item1: false,
    item2: false,
    item3: false,
    item4: false,
    item5: false,
    item6: false,
  });

  const handleSelectAllChange = () => {
    const newCheckedItems: CheckedItems = {
      selectAll: !checkedItems.selectAll,
      item1: !checkedItems.selectAll,
      item2: !checkedItems.selectAll,
      item3: !checkedItems.selectAll,
      item4: !checkedItems.selectAll,
      item5: !checkedItems.selectAll,
      item6: !checkedItems.selectAll,
    };
    setCheckedItems(newCheckedItems);
  };

  const handleIndividualChange = (
    item: keyof Omit<CheckedItems, 'selectAll'>,
  ) => {
    const newCheckedItems: CheckedItems = {
      ...checkedItems,
      [item]: !checkedItems[item],
    };

    newCheckedItems.selectAll = Object.keys(newCheckedItems)
      .slice(1)
      .every(
        (key) => newCheckedItems[key as keyof Omit<CheckedItems, 'selectAll'>],
      );
    setCheckedItems(newCheckedItems);
  };

  return (
    <>
      <Container>
        <Label>
          <StyledInput
            type="checkbox"
            checked={checkedItems.selectAll}
            onChange={handleSelectAllChange}
          />
          전체선택
        </Label>
        <Label>
          <StyledInput
            type="checkbox"
            checked={checkedItems.item1}
            onChange={() => handleIndividualChange('item1')}
          />
          선택 1
        </Label>
        <Label>
          <StyledInput
            type="checkbox"
            checked={checkedItems.item2}
            onChange={() => handleIndividualChange('item2')}
          />
          선택 2
        </Label>
        <Label>
          <StyledInput
            type="checkbox"
            checked={checkedItems.item3}
            onChange={() => handleIndividualChange('item3')}
          />
          선택 3
        </Label>
        <Label>
          <StyledInput
            type="checkbox"
            checked={checkedItems.item4}
            onChange={() => handleIndividualChange('item4')}
          />
          선택 4
        </Label>
        <Label>
          <StyledInput
            type="checkbox"
            checked={checkedItems.item5}
            onChange={() => handleIndividualChange('item5')}
          />
          선택 5
        </Label>
        <Label>
          <StyledInput
            type="checkbox"
            checked={checkedItems.item6}
            onChange={() => handleIndividualChange('item6')}
          />
          선택 6
        </Label>
      </Container>
    </>
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

export default CategoryContainer;
