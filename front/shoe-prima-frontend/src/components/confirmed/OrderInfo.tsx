import React, { useState } from 'react';
import styled from 'styled-components';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import Order from './Order';

const OrderInfo: () => JSX.Element = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <OrderInfos>
        <OrdersArea>
          <ToggleButton onClick={toggleDetails}>
            주문 목록 {isOpen ? <KeyboardArrowDown /> : <KeyboardArrowUp />}
          </ToggleButton>
          {isOpen && (
            <OrdersContainer>
              <Order />
              <Order />
              <Order />
            </OrdersContainer>
          )}
        </OrdersArea>
        <OrderInfoArea>
          <Heading>주문 정보</Heading>
          <Info>
            <InfoTitle>
              <Title>상품 금액</Title>
              <Title>999,999원</Title>
            </InfoTitle>
            <InfoSubTitle>
              <SubTitle>상품 금액</SubTitle>
              <SubTitle>999,999원</SubTitle>
            </InfoSubTitle>
            <InfoSubTitle>
              <SubTitle>상품 금액</SubTitle>
              <SubTitle>999,999원</SubTitle>
            </InfoSubTitle>
          </Info>
          <Info>
            <InfoTitle>
              <Title>상품 금액</Title>
              <Title>999,999원</Title>
            </InfoTitle>
            <InfoSubTitle>
              <SubTitle>상품 금액</SubTitle>
              <SubTitle>999,999원</SubTitle>
            </InfoSubTitle>
            <InfoSubTitle>
              <SubTitle>상품 금액</SubTitle>
              <SubTitle>999,999원</SubTitle>
            </InfoSubTitle>
          </Info>
          <SumArea>
            <InfoTitle>
              <SumTitle>상품 금액</SumTitle>
              <Sum>999,999원</Sum>
            </InfoTitle>
            <InfoSubTitle>
              <SubTitle>상품 금액</SubTitle>
              <SubTitle>999,999원</SubTitle>
            </InfoSubTitle>
            <InfoSubTitle>
              <SubTitle>상품 금액</SubTitle>
              <SubTitle>999,999원</SubTitle>
            </InfoSubTitle>
          </SumArea>
        </OrderInfoArea>
      </OrderInfos>
    </>
  );
};

const OrderInfos = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 2.5rem;
  margin: 1.75rem auto;
`;

const OrdersArea = styled.div`
  width: 560px;
`;

const ToggleButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  border: none;
  background-color: var(--white-900);
  cursor: pointer;

  color: var(--black-900, var(--color---black900, #222));
  font-feature-settings: 'calt' off;
  font-family: Pretendard;
  font-size: var(--font-size---heading2-font-size, 20px);
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.2px;
`;

const OrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.75rem;
  align-self: stretch;
  margin-top: 1.75rem;
`;

const OrderInfoArea = styled.div`
  display: flex;
  width: 560px;
  padding-left: 2.5rem;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
  border-left: 1px solid var(--color---lightgray300, #e5e5e5);
`;

const Heading = styled.div`
  display: flex;
  padding: 0px 4px 16px 4px;
  align-items: center;
  gap: 0.625rem;
  align-self: stretch;

  border-bottom: 3px solid var(--color---gray900, #373737);

  color: var(--black-900, var(--color---black900, #222));
  font-feature-settings: 'calt' off;

  /* heading/heading2/bold */
  font-family: Pretendard;
  font-size: var(--font-size---heading2-font-size, 20px);
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.2px;
`;

const Info = styled.div`
  display: flex;
  padding: 12px 12px 14px 12px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;

  border-bottom: 1px solid var(--color---lightgray300, #e5e5e5);
`;

const InfoTitle = styled.div`
  display: flex;
  padding: 12px 0px;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
`;

const Title = styled.div`
  color: var(--black-900, var(--color---black900, #222));
  font-feature-settings: 'calt' off;

  /* headline/headline2/bold */
  font-family: Pretendard;
  font-size: var(--font-size---headline2-font-size, 17px);
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.17px;
`;

const InfoSubTitle = styled.div`
  display: flex;
  padding: 10px 0px;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
`;

const SubTitle = styled.div`
  color: var(--gray-500, var(--color---gray500, #808080));
  font-feature-settings: 'calt' off;

  /* body/body3/regular */
  font-family: Pretendard;
  font-size: var(--font-size---body3-font-size, 14px);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.14px;
`;

const SumArea = styled.div`
  display: flex;
  padding: 12px 12px 14px 12px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  border-bottom: 1px solid var(--color---lightgray300, #e5e5e5);
  background: var(--color---lightgray100, #f9f9f9);
`;

const SumTitle = styled.div`
  color: var(--black-900, var(--color---black900, #222));
  font-feature-settings: 'calt' off;

  /* heading/heading2/bold */
  font-family: Pretendard;
  font-size: var(--font-size---heading2-font-size, 20px);
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.2px;
`;

const Sum = styled.div`
  color: var(--orange-900, var(--color---orange900, #ff9500));
  font-feature-settings: 'calt' off;

  /* heading/heading2/bold */
  font-family: Pretendard;
  font-size: var(--font-size---heading2-font-size, 20px);
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.2px;
`;
export default OrderInfo;
