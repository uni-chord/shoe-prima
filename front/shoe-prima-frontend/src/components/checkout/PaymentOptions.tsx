import { useState } from 'react';
import styled from 'styled-components';
import RadioButtonSelected from '/src/assets/checkout/radio-button-selected.svg';
import RadioButtonUnSelected from '/src/assets/checkout/radio-button-unselected.svg';

const PaymentOptions: () => JSX.Element = () => {
  const [selected, setSelected] = useState('quick');

  return (
    <PaymentOptionsBox>
      <Title>결제 정보</Title>
      <RadioButtonList>
        <RadioButton onClick={() => setSelected('quick')}>
          <RadioInput>
            {selected === 'quick' ? (
              <img src={RadioButtonSelected} alt="select-quick-payment" />
            ) : (
              <img src={RadioButtonUnSelected} alt="unselect-quick-payment" />
            )}
          </RadioInput>
          <Label>간편 결제</Label>
        </RadioButton>
        <RadioButton onClick={() => setSelected('general')}>
          <RadioInput>
            {selected === 'general' ? (
              <img src={RadioButtonSelected} alt="select-general-payment" />
            ) : (
              <img src={RadioButtonUnSelected} alt="unselect-general-payment" />
            )}
          </RadioInput>
          <Label>일반 결제</Label>
        </RadioButton>
      </RadioButtonList>
    </PaymentOptionsBox>
  );
};

export default PaymentOptions;

const PaymentOptionsBox = styled.section`
  display: flex;
  flex-direction: column;
  align-self: stretch;

  padding: var(--title--title1--regular) 0rem;
  border-top: 1px solid var(--lightgray--300);
`;

const Title = styled.h2`
  padding-bottom: var(--title--title2--regular);

  color: var(--black--900);
  font-feature-settings: 'calt' off;

  /* headline/headline2/bold */
  font-family: Pretendard;
  font-size: var(--headline--headline2--regular);
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.0106rem;
`;

const RadioButtonList = styled.ul`
  display: flex;
  flex-direction: column;
`;

const RadioButton = styled.li`
  display: flex;
  align-items: center;
  align-self: stretch;
  gap: 0.75rem;

  padding: var(--caption--caption2--regular) 0rem;
`;

const RadioInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: var(--title--title3--regular);
  height: var(--title--title3--regular);

  svg {
    width: 100%;
    height: 100%;
  }

  cursor: pointer;
`;

const Label = styled.label`
  color: var(--gray--900);
  font-feature-settings: 'calt' off;

  /* label/regular */
  font-family: Pretendard;
  font-size: var(--label--regular);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.0094rem;

  cursor: pointer;
`;
