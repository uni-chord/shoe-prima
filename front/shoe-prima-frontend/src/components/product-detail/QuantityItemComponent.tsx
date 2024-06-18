import React from 'react';
import styled from 'styled-components';
import { Remove, Add, Close } from '@mui/icons-material';

interface QuantityItemComponentProps {
  item: Selection;
  index: number;
  removeItem: (index: number) => void;
  decrementQuantity: (index: number) => void;
  incrementQuantity: (index: number) => void;
}

interface Selection {
  size: string;
  color: string;
  quantity: number;
  price: number;
}

const QuantityItemComponent: React.FC<QuantityItemComponentProps> = ({
  item,
  index,
  removeItem,
  decrementQuantity,
  incrementQuantity,
}) => {
  return (
    <QuantityItem>
      <QuantityDetails>
        {`${item.color} / ${item.size}`}
        <button onClick={() => removeItem(index)}>
          <Close />
        </button>
      </QuantityDetails>
      <QuantityArea>
        <QuantityControls>
          <QuantityButton onClick={() => decrementQuantity(index)}>
            <Remove />
          </QuantityButton>
          <QuantityDisplay>{item.quantity}</QuantityDisplay>
          <QuantityButton onClick={() => incrementQuantity(index)}>
            <Add />
          </QuantityButton>
        </QuantityControls>
        <QuantityPrice>
          {`${(item.quantity * item.price).toLocaleString()}원`}
        </QuantityPrice>
      </QuantityArea>
    </QuantityItem>
  );
};

const QuantityItem = styled.div`
  display: flex;
  padding: 12px 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;

  border: 1px solid var(--color---lightgray300, #e5e5e5);
  background: var(--color---lightgray100, #f9f9f9);
`;

const QuantityDetails = styled.div`
  flex: 3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  & > button {
    margin-left: auto; //
    padding: 4px 8px;
    background: var(--color---lightgray100, #f9f9f9);
    color: var(--color---lightgray300, #e5e5e5);
    border: none;
    cursor: pointer;
  }
`;

const QuantityArea = styled.div`
  display: flex;
  flex-direction: row; // 가로로 정렬
  align-items: center; // 세로 중심 정렬
  justify-content: space-between; // 요소 사이의 여백 균등 분배
  width: 100%; // 너비를 부모 요소와 동일하게 설정
`;

const QuantityControls = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const QuantityButton = styled.button`
  display: flex;
  padding: 4px;
  align-items: center;
  justify-content: center;
  gap: 10px;

  border: 1px solid var(--color---lightgray300, #e5e5e5);
  background: var(--color---white900, #fff);

  width: var(--font-size---title3-font-size, 24px);
  height: var(--font-size---title3-font-size, 24px);
`;

const QuantityDisplay = styled.div`
  display: flex;
  padding: 0px var(--border-radius---border-radius-s, 8px);
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  border: 1px solid var(--color---lightgray300, #e5e5e5);
  background: var(--color---white900, #fff);

  color: var(--black-900, var(--color---black900, #222));
  font-feature-settings: 'calt' off;

  /* body/body2/regular */
  font-family: Pretendard;
  font-size: var(--font-size---body2-font-size, 15px);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.15px;
`;

const QuantityPrice = styled.div`
  flex: 1;
  text-align: right;

  color: var(--black-900, var(--color---black900, #222));
  font-feature-settings: 'calt' off;

  /* body/body1/regular */
  font-family: Pretendard;
  font-size: var(--font-size---body1-font-size, 16px);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.16px;
`;

export default QuantityItemComponent;
