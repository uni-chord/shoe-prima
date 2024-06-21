import React, { useState } from 'react';
import styled from 'styled-components';
import IconButton from '../common/IconButton';

interface CounterProps {
  max: number;
}

const Counter: React.FC<CounterProps> = ({ max }) => {
  const [count, setCount] = useState(0);

  const handleIncrease = (): void => {
    if (count < max) {
      setCount(count + 1);
    }
  };

  const handleDecrease = (): void => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <CounterBox>
      <IconButtonWrapper>
        <IconButton iconName="remove" onClick={handleDecrease} />
      </IconButtonWrapper>
      <CountDisplay>{count}</CountDisplay>
      <IconButtonWrapper>
        <IconButton iconName="add" onClick={handleIncrease} />
      </IconButtonWrapper>
    </CounterBox>
  );
};

export default Counter;

const CounterBox = styled.div`
  display: flex;
  align-items: center;
  width: 108px;
`;

const CountDisplay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 2rem;
  padding: 0rem 0.5rem;
  border-top: 1px solid var(--lightgray--300);
  border-bottom: 1px solid var(--lightgray--300);
  font-size: 15px;
`;

const IconButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--lightgray--300);
  padding: 0.25rem;
`;
