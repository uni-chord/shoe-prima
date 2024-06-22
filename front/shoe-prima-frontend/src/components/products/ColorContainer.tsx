import React, { useState } from 'react';
import styled from 'styled-components';

const colors = [
  { name: '블랙', colorCode: '#000000' },
  { name: '블루', colorCode: '#0000FF' },
  { name: '브라운', colorCode: '#8B4513' },
  { name: '그린', colorCode: '#008000' },
  { name: '그레이', colorCode: '#808080' },
  {
    name: '멀티컬러',
    colorCode: 'linear-gradient(45deg, red, yellow, green, blue)',
  },
  { name: '오렌지', colorCode: '#FFA500' },
  { name: '핑크', colorCode: '#FFC0CB' },
  { name: '퍼플', colorCode: '#800080' },
  { name: '레드', colorCode: '#FF0000' },
  { name: '화이트', colorCode: '#FFFFFF', border: '1px solid #e5e5e5' },
  { name: '옐로우', colorCode: '#FFFF00' },
];

const ColorContainer: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<string>('');

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <Container>
      <FormToggle>
        {colors.map((color, index) => (
          <RadioBtn
            key={index}
            checked={selectedColor === color.name}
            onClick={() => handleColorChange(color.name)}
          >
            <ColorCircle
              color={color.colorCode}
              border={color.border || ''}
              checked={selectedColor === color.name}
            />
            <ColorName>{color.name}</ColorName>
          </RadioBtn>
        ))}
      </FormToggle>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  padding-bottom: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;
`;

const RadioBtn = styled.div<{ checked: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  width: 80px;
`;

const ColorCircle = styled.div<{
  color: string;
  border: string;
  checked: boolean;
}>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${(props) => props.color};
  border: ${(props) => props.border};
  position: relative;

  ${(props) =>
    props.checked &&
    `
    &::after {
      content: '✔';
      color: white;
      font-size: 16px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  `}
`;

const ColorName = styled.div`
  color: var(--black-900, var(--color---black900, #222));
  font-feature-settings: 'calt' off;

  /* caption/caption1/regular */
  font-family: Pretendard;
  font-size: var(--font-size---caption1-font-size, 13px);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.13px;
`;

const FormToggle = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); // 한 줄에 3개의 아이템
  width: 100%;
  grid-row-gap: 16px;
`;

export default ColorContainer;
