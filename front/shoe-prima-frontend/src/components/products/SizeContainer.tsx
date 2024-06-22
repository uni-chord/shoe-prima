import React, { useState } from 'react';
import styled from 'styled-components';

type SizeType = string;

const SizeContainer: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState(''); // 기본 선택 사이즈 none
  const sizes: SizeType[] = Array.from(
    { length: (290 - 220) / 5 + 1 },
    (_, i) => (220 + i * 5).toString(),
  );

  const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSize = event.target.value;
    setSelectedSize(newSize);
  };

  return (
    <>
      <Container>
        <Label htmlFor="shoeSize"></Label>
        <FormToggle>
          {sizes.map((size, index) => (
            <RadioBtn key={index} checked={selectedSize === size}>
              <Input
                id={`size-${size}`}
                type="radio"
                name="shoeSize"
                value={size}
                checked={selectedSize === size}
                onChange={handleSizeChange}
              />
              {size}
            </RadioBtn>
          ))}
        </FormToggle>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 9px;
  align-self: stretch;
`;

const Label = styled.label``;

const RadioBtn = styled.label<{ checked: boolean }>`
  display: flex;
  height: 48px;
  padding: 13px 10px;
  justify-content: center;
  align-items: center;
  gap: 6px;
  flex: 1 0 0;

  border-radius: var(--border-radius---border-radius-xs, 4px);

  border: 1px solid
    ${(props) =>
      props.checked
        ? 'var(--color---black900, #222)'
        : 'var(--color---lightgray300, #e5e5e5)'};
  background: ${(props) =>
    props.checked ? 'var(--color---white900, #FFF)' : 'transparent'};
  color: inherit;
  cursor: pointer;
  box-sizing: border-box;
  flex: 1 1 auto;
`;

const Input = styled.input`
  display: none;
`;

const FormToggle = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); // 한 줄에 3개의 아이템
  gap: 0.5rem;
  width: 100%;
`;

export default SizeContainer;
